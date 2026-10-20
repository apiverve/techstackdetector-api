from setuptools import setup, find_packages

setup(
    name='apiverve_websitetechstackdetector',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Website Tech Stack Detector identifies the technologies a website runs on, such as its CMS, ecommerce platform, JavaScript framework, analytics, CDN and hosting, with categories and a confidence score for each. Paid plans add detected versions, CPE identifiers and a rendered mode that runs the page's JavaScript.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/techstackdetector?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
