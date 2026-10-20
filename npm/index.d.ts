declare module '@apiverve/techstackdetector' {
  export interface techstackdetectorOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface techstackdetectorResponse {
    status: string;
    error: string | null;
    data: WebsiteTechStackDetectorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface WebsiteTechStackDetectorData {
      url:                   null | string;
      finalURL:              null | string;
      statusCode:            number | null;
      mode:                  null | string;
      technologyCount:       number | null;
      technologies:          Technology[];
      fingerprintsUpdatedAt: Date | null;
  }
  
  interface Technology {
      name:        null | string;
      slug:        null | string;
      categories:  (null | string)[];
      version:     null | string;
      confidence:  number | null;
      implied:     boolean | null;
      detectedBy:  (null | string)[];
      website:     null | string;
      icon:        null | string;
      description: null | string;
      cpe:         null | string;
  }

  export default class techstackdetectorWrapper {
    constructor(options: techstackdetectorOptions);

    execute(callback: (error: any, data: techstackdetectorResponse | null) => void): Promise<techstackdetectorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: techstackdetectorResponse | null) => void): Promise<techstackdetectorResponse>;
    execute(query?: Record<string, any>): Promise<techstackdetectorResponse>;
  }
}
