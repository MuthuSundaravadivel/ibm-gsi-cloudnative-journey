(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{KsxT:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var r=a("7ljp"),i=a("013z");a("T0C+"),a("qKvR");function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var o={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},p=c("PageDescription"),l=c("Tabs"),b=c("Tab"),s={_frontmatter:o},m=i.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(r.b)(m,n({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(p,{mdxType:"PageDescription"},Object(r.b)("h2",null,Object(r.b)("strong",{parentName:"h2"},"Migrate Application to Liberty Container on IBM Cloud"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Recap : ")," "),Object(r.b)("p",null,"As part of the Transformation Advisor : Part 2 - Analyse the scan results, we covered"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Uploading the scanned results to the Transformation Advisor "),Object(r.b)("li",{parentName:"ol"},"Transformation Advisor generates the recommendations and reports based on the scanned results"),Object(r.b)("li",{parentName:"ol"},"Analyzed the Technology report, Inventory report and Analysis report of the existing application to see the fitment for migration.")),Object(r.b)("h3",null,"Migrate to Liberty"),Object(r.b)("p",null,"As part of this session, we will start with preparation stage of the existing application to container based stack on IBM Cloud using the Transformation advisor. As in the previous part, navigate to your workspace in the Transformation Advisor that is already created earlier."),Object(r.b)("p",null,"Transformation Advisor creates some accelerators to speed up the process of migrating an application. These files are a starting point for most modernization journeys and require modification. In this section, you will modify those files for CustomerOrderServiceApp."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"From the main recommendations page, click the ",Object(r.b)("inlineCode",{parentName:"p"},"...")," link on the right for the ",Object(r.b)("inlineCode",{parentName:"p"},"CustomerOrderServiceApp.ear")," and select View migration plan")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You will Navigate to the Migration Bundle Page of the Transformation Advisor"))),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.65277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABVElEQVQoz62S2W7CMBBF/a996V9AEpYHKoSgrSrxaQgapJAEZ3M2Epbk1mOwFEC81dLRWKP4zIwdNvmY4uv7B9PZJybTOXrmGH3DQr/fw3A4xGg0eoLyGsMwYJomLMvCYDAAOx5PyPMCRXHAfyy23dpYrVb43Wzgui48z5Vxd9t7Kuq97/sIggBJkqjIOUccxYiiCGVZ4nw+g+12dNhDmqbqwziO79C5LMvkFIWcJlcIIVReZNdzVVWhbVswsodhqJJEKg9mN6hIF5JQ7AovbaNETXONqsP1eo2NHNm2bbier8ajkajYIyTpCklC0FJCx3HgSqnuiD7UUE6P+IgWdhdpWRDG8Pb8qRN9DXQ461yDLqKFdV3L+ztIavkoDVgiCkSivP0697zqTgupYH1qcKgvsr2T7E8KeZTD2WdIRPr0CK8gGUk5D7BYzGGOZ3hfVnhbAn9LUOCk7uUEDwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"pbw",title:"pbw",src:"/ibm-gsi-cloudnative-journey/static/3af093011c1717acd86f971c7dc6f0a5/3cbba/ta-migration-repo.png",srcSet:["/ibm-gsi-cloudnative-journey/static/3af093011c1717acd86f971c7dc6f0a5/7fc1e/ta-migration-repo.png 288w","/ibm-gsi-cloudnative-journey/static/3af093011c1717acd86f971c7dc6f0a5/a5df1/ta-migration-repo.png 576w","/ibm-gsi-cloudnative-journey/static/3af093011c1717acd86f971c7dc6f0a5/3cbba/ta-migration-repo.png 1152w","/ibm-gsi-cloudnative-journey/static/3af093011c1717acd86f971c7dc6f0a5/0b124/ta-migration-repo.png 1728w","/ibm-gsi-cloudnative-journey/static/3af093011c1717acd86f971c7dc6f0a5/4ea69/ta-migration-repo.png 2304w","/ibm-gsi-cloudnative-journey/static/3af093011c1717acd86f971c7dc6f0a5/4fecd/ta-migration-repo.png 2548w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select the Build type as Source code")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Ensure “Don’t use” is selected for the “Use Accelerator for Teams Collection”")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The migration files section show the bundle that will be generated for the migration:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"server.xml")," - Transformation Advisor extracts most of the configuration from traditional WebSphere and generates a server.xml for Liberty to use"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Dockerfile")," - Used to create the Docker image, which includes the application and configuration for Liberty"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Operator resources")," - Used in Red Hat OpenShift to deploy the application using the ",Object(r.b)("a",n({parentName:"li"},{href:"https://operatorhub.io/operator/open-liberty"}),"Open Liberty operator")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"pom.xml")," - Used for Maven builds, particularly useful if the application does not already employ build scripts"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"We will push the Transformation generated files to the git repo. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To do previous step, "),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"First we will create a new repository in your public git hub. Let us name the repository as “ta-appmodern-migrate”")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Copy the https Url of your repository,\n’",Object(r.b)("a",n({parentName:"p"},{href:"https://github.com/%7Busername%7D/ta-appmodern-migrate.git'"}),"https://github.com/{username}/ta-appmodern-migrate.git’"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Use this git repository in your Transformation Migration ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Once this is done, select the “send to git option” in the “Migration Bundle Page” to push the migration files to your git repository")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"we need to add the source code that would need changes to the new base repository generated from Transformation Advisor. so lets clone the git repo to the local system"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"git clone 'https://github.com/{user}/ta-appmodern-migrate.git'\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The source code of the application is available in the below git location in branch liberty. Download the liberty branch from the below repository\n’",Object(r.b)("a",n({parentName:"p"},{href:"https://github.com/ibm-gsi-ecosystem/appmod-advance-app.git'"}),"https://github.com/ibm-gsi-ecosystem/appmod-advance-app.git’"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Copy the below application source code folders to the folder that is cloned from the ’",Object(r.b)("a",n({parentName:"p"},{href:"https://github.com/%7Buser%7D/ta-appmodern-migrate.git'"}),"https://github.com/{user}/ta-appmodern-migrate.git’")," repo. The application folders that needs to copied are"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"CustomerOrderServices"),Object(r.b)("li",{parentName:"ol"},"CustomerOrderServicesApp"),Object(r.b)("li",{parentName:"ol"},"CustomerOrderServicesProject"),Object(r.b)("li",{parentName:"ol"},"CustomerOrderServicesWeb"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Make the simple code changes required for the EJB lookups from the “CustomerOrderServicesWeb” which were recommended by IBM Cloud Transformation Advisor. The three Java classes that should be modified to look up Enterprise JavaBeans differently are shown in the detailed analysis view of IBM Cloud Transformation Advisor. The Java files that needs the changes from EJB lookups are as below. They are under the package called “org.pwte.example.resources”"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"ProductResource.java"),Object(r.b)("p",{parentName:"li"},"Before"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),'productSearch = (ProductSearchService) \nnew InitialContext().lookup("ejblocal:org.pwte.example.service.ProductSearchService");\n')),Object(r.b)("p",{parentName:"li"},"After"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),'productSearch = (ProductSearchService) \nnew InitialContext().lookup("java:app/CustomerOrderServices/ProductSearchServiceImpl!org.pwte.example.service.ProductSearchService");\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"CategoryResource.java"),Object(r.b)("p",{parentName:"li"},"  Before"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),'productSearch = (ProductSearchService) \nnew InitialContext().lookup("ejblocal:org.pwte.example.service.ProductSearchService");\n')),Object(r.b)("p",{parentName:"li"},"  After"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),'productSearch = (ProductSearchService) \nnew InitialContext().lookup("java:app/CustomerOrderServices/ProductSearchServiceImpl!org.pwte.example.service.ProductSearchService");\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"CustomerOrderResource.java"),Object(r.b)("p",{parentName:"li"},"  Before"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),'customerOrderServices = (CustomerOrderServices) \nctx.lookup("ejblocal:org.pwte.example.service.CustomerOrderServices");\n')),Object(r.b)("p",{parentName:"li"},"  After"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),'customerOrderServices = (CustomerOrderServices) \nctx.lookup("java:app/CustomerOrderServices/CustomerOrderServicesImpl!org.pwte.example.service.CustomerOrderServices");\n'))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Now that the source code modification is done, let us continue with the other changes related for the migration.  Now Copy ",Object(r.b)("inlineCode",{parentName:"p"},"db2jcc_licence_cu.jar")," and ",Object(r.b)("inlineCode",{parentName:"p"},"db2jcc.jar")," to the folder ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/liberty/binary/lib"),"  from you earlier download folder of the binaries. ’",Object(r.b)("a",n({parentName:"p"},{href:"https://github.com/ibm-gsi-ecosystem/appmod-advance-app.git'"}),"https://github.com/ibm-gsi-ecosystem/appmod-advance-app.git’")),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Note:")," The library folders both in source and target location are same (",Object(r.b)("inlineCode",{parentName:"p"},"src/main/liberty/binary/lib"),")")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Also copy the Dockerfile to the root folder of the repo. This has few project specific changes."))),Object(r.b)("p",null,"Ideally, Transformation Advisor could figure out enough from the original application so that the generated files contain exactly what’s needed and we could use these files as-is. Unfortunately, there are some details Transformation Advisor cannot discern, so we’ll need to add those into the files manually."),Object(r.b)("p",null,"Edit the ",Object(r.b)("inlineCode",{parentName:"p"},"server.xml")," file using your favorite editor to make the following changes:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("p",null,"The db2 service provisioned in the IBM cloud shall be used as the database. Access the db2 service and navigate to the “Service Credentials Tab” to retrieve the database information listed below:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"User name"),Object(r.b)("li",{parentName:"ol"},"password"),Object(r.b)("li",{parentName:"ol"},"db name"),Object(r.b)("li",{parentName:"ol"},"db host name"),Object(r.b)("li",{parentName:"ol"},"db port")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Ensure the below features are mapped in the server.xml"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"<featureManager>\n  <feature>appSecurity-2.0</feature>\n  <feature>ldapRegistry-3.0</feature>\n  <feature>localConnector-1.0</feature>\n  <feature>ejbLite-3.2</feature>  \n  <feature>jaxrs-2.0</feature>  \n  <feature>jdbc-4.1</feature>\n  <feature>jpa-2.0</feature>\n  <feature>jsp-2.3</feature>\n  <feature>servlet-3.1</feature>\n  <feature>monitor-1.0</feature>\n  <feature>transportsecurity-1.0</feature>\n</featureManager>\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Ensure the ",Object(r.b)("inlineCode",{parentName:"p"},"dataSources")," and ",Object(r.b)("inlineCode",{parentName:"p"},"jdbcDrivers")," are configured.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"As part of the server.xml, there will be one references to jdbcDriver. This reference will map the path of the db2 and db2 licence jar  locations as ",Object(r.b)("inlineCode",{parentName:"p"},"${shared.config.dir}/lib/global/db2jcc.jar")," and ",Object(r.b)("inlineCode",{parentName:"p"},"${shared.config.dir}/lib/global/db2jcc_license_cu.jar"),". The jdbcDrive id is mapped to ",Object(r.b)("inlineCode",{parentName:"p"},"DB2_Universal_JDBC_Driver_Provider_(XA)")," and the javax.sql.DataSource is mapped to  ",Object(r.b)("inlineCode",{parentName:"p"},"com.ibm.db2.jcc.DB2XADataSource"),".  The jdbcDriver tag snipped should be like as below "),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),'<jdbcDriver id="DB2_Universal_JDBC_Driver_Provider_(XA)" javax.sql.DataSource="com.ibm.db2.jcc.DB2XADataSource">\n    <library>\n        <file name="${shared.config.dir}/lib/global/db2jcc.jar"/>\n        <file name="${shared.config.dir}/lib/global/db2jcc_license_cu.jar"/>\n    </library>\n</jdbcDriver>\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"server.xml will have one reference of ",Object(r.b)("inlineCode",{parentName:"p"},"datasource")," tag. This will have an element named jdbcDriverRefs. change the jdbcDriverRefs as ",Object(r.b)("inlineCode",{parentName:"p"},"DB2_Universal_JDBC_Driver_Provider_(XA)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the datasource tag, as part of the ",Object(r.b)("inlineCode",{parentName:"p"},"properties.db2.jcc")," line, add ",Object(r.b)("inlineCode",{parentName:"p"},'user="{to share}" password="{to share}" ')," and provide the username and password details")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Also change the databaseName=“{to share}”, serverName=“{to share}” and portNumber=“{to share}” ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"After changing the datasource tag with jdbcDriverRefs, username & password, Database details (databaseName, serverName and portNumber), the dataSource snipped should like as below:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),'DATASOURCE FIRST REFERENCE:\n\n<dataSource containerAuthDataRef="workstationNode01/db2cloud" id="OrderDS" jdbcDriverRef="DB2_Universal_JDBC_Driver_Provider_(XA)" jndiName="jdbc/orderds">\n    <properties.db2.jcc  password="????" user="????" databaseName="????"  name="OrderDS" portNumber="????" serverName="????" />\n    <connectionManager agedTimeout="0" connectionTimeout="180" maxIdleTime="1800" maxPoolSize="10" minPoolSize="0" reapTime="180"/>\n</dataSource>\n')),Object(r.b)("p",{parentName:"li"},"  ",Object(r.b)("strong",{parentName:"p"},"Note:*")," ???? should be replaced by actual values")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Ensure the authData is configured as below"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),' <authData id="workstationNode01/db2cloud" password="????" user="????"/>\n')),Object(r.b)("p",{parentName:"li"}," ",Object(r.b)("strong",{parentName:"p"},"Note:*")," ???? should be replaced by actual values")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Ensure Keystore and BasicRegistry is configured as below"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),' <keyStore id="defaultKeyStore" password="whodunit"/>\n \x3c!-- User and group security definitions --\x3e\n\n <basicRegistry id="basic" realm="customRealm">\n        <user name="rbarcia" password="bl0wfish"/>\n     <group name="SecureShopper">\n         <member name="rbarcia"/>\n     </group>\n </basicRegistry>\n')),Object(r.b)("p",{parentName:"li"},"  ",Object(r.b)("strong",{parentName:"p"},"Note:*")," The authentication data is static and used by the application")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Validate the application tag to be "),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),'<application id="CustomerOrderServicesApp" location="CustomerOrderServicesApp-0.1.0-SNAPSHOT.ear" name="CustomerOrderServicesApp" type="ear">\n    <classloader apiTypeVisibility="spec, ibm-api, third-party" />\n</application>\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Save your changes"),Object(r.b)("p",{parentName:"li"},"  ",Object(r.b)("strong",{parentName:"p"},"Note:")," Reference server.xml with the changes is also available in the downloaded reference repo ’",Object(r.b)("a",n({parentName:"p"},{href:"https://github.com/ibm-gsi-ecosystem/appmod-advance-app.git%E2%80%99"}),"https://github.com/ibm-gsi-ecosystem/appmod-advance-app.git’"),". The location is ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/liberty/binary/config"),".  The database details marked in ???? has to be replaced by the actual database info."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The modified ",Object(r.b)("inlineCode",{parentName:"p"},"server.xml")," should look like this:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{}),'<?xml version="1.0" encoding="UTF-8"?>\x3c!--Generated by IBM TransformationAdvisor\n Fri Apr 17 13:12:09 UTC 2020--\x3e\n <server>\n \x3c!--These elements have been identified from this application\'s configuration.--\x3e\n     <featureManager>\n         <feature>appSecurity-2.0</feature>\n         <feature>ldapRegistry-3.0</feature>\n         <feature>localConnector-1.0</feature>\n         <feature>ejbLite-3.2</feature>  \n         <feature>jaxrs-2.0</feature>  \n         <feature>jdbc-4.1</feature>\n         <feature>jpa-2.0</feature>\n         <feature>jsp-2.3</feature>\n         <feature>servlet-3.1</feature>\n         <feature>monitor-1.0</feature>\n         <feature>transportsecurity-1.0</feature>\n     </featureManager>\n     <httpEndpoint host="*" httpPort="9080" httpsPort="9443" id="defaultHttpEndpoint"/>\n     <authData id="workstationNode01/db2cloud" password="OWJiNDk0YzRkN2Yz" user="bluadmin"/>\n\n     <keyStore id="defaultKeyStore" password="whodunit"/>\n     \x3c!-- User and group security definitions --\x3e\n\n     <basicRegistry id="basic" realm="customRealm">\n         <user name="rbarcia" password="bl0wfish"/>\n         <group name="SecureShopper">\n             <member name="rbarcia"/>\n         </group>\n     </basicRegistry>\n\n     <jdbcDriver id="DB2_Universal_JDBC_Driver_Provider_(XA)" javax.sql.DataSource="com.ibm.db2.jcc.DB2XADataSource">\n         <library>\n             <file name="${shared.config.dir}/lib/global/db2jcc.jar"/>\n             <file name="${shared.config.dir}/lib/global/db2jcc_license_cu.jar"/>\n         </library>\n     </jdbcDriver>\n\n     <dataSource containerAuthDataRef="workstationNode01/db2cloud" id="OrderDS" jdbcDriverRef="DB2_Universal_JDBC_Driver_Provider_(XA)" jndiName="jdbc/orderds">\n         <properties.db2.jcc  password="????" user="????" databaseName="????"  name="OrderDS" portNumber="????" serverName="????" />\n         <connectionManager agedTimeout="0" connectionTimeout="180" maxIdleTime="1800" maxPoolSize="10" minPoolSize="0" reapTime="180"/>\n     </dataSource>\n\n     <variable name="DERBY_JDBC_DRIVER_PATH" value="${shared.config.dir}/lib/global"/>\n     <variable name="DB2UNIVERSAL_JDBC_DRIVER_NATIVEPATH" value="${shared.config.dir}/lib/global"/>\n     <applicationManager autoExpand="true"/>\n     \x3c!--These elements are from the profile level configuration. Not all of them may be necessary for your application.--\x3e\n\n     <application id="CustomerOrderServicesApp" location="CustomerOrderServicesApp-0.1.0-SNAPSHOT.ear" name="CustomerOrderServicesApp" type="ear">\n         <classloader apiTypeVisibility="spec, ibm-api, third-party" />\n     </application>\n </server>\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Push the change to Git (Application Source Change, server.xml and db2 jars)"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),'git add .\ngit commit -m "Changes related to Application Source, DB -server.xml and db2 jars"\ngit push\n')))),Object(r.b)("p",null,"Now that we’ve configured Liberty and the application, let’s deploy it on the Openshift."),Object(r.b)("h3",null,"Run the application on Liberty"),Object(r.b)(l,{mdxType:"Tabs"},Object(r.b)(b,{label:"oc pipeline",open:"true",mdxType:"Tab"}),Object(r.b)(b,{label:"S2I",open:"true",mdxType:"Tab"},"Now that we are ready for the application deployment on the Openshift cluster, we will here follow the S2I (Source to Image approach) for the build and deployment. Let us use the Cloud Shell for the same.",Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("p",null,"Ensure you ",Object(r.b)("strong",{parentName:"p"},"don’t copy")," and push to the git, any of the below folders and files that are used by the pipeline from the reference repo ‘",Object(r.b)("a",n({parentName:"p"},{href:"https://github.com/ibm-gsi-ecosystem/appmod-advance-app.git%E2%80%99"}),"https://github.com/ibm-gsi-ecosystem/appmod-advance-app.git’"),"."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Copy charts (folder) "),Object(r.b)("li",{parentName:"ol"},"Copy assets (folder)"),Object(r.b)("li",{parentName:"ol"},"Copy Jenkinsfile (file) "),Object(r.b)("li",{parentName:"ol"},"Copy pom.xml (file). Use only the default pom generated by the TA ")),Object(r.b)("p",null,"The steps below will help to deploy the application to the cluster using S2I"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Login to your OC cluster using the Copy Login Command from the browser of the openshift console"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"oc login {Cluster info}\noc project dev-{initial} \noc project -q  \n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Let us use openshift S2I to build and deploy"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"oc new-app 'https://github.com/{repo}/ta-appmodern-migrate.git' --name=customerorderservice\n.....\n.....\n\n--\x3e Success\n    Build scheduled, use 'oc logs -f bc/customerorderservice' to track it progress\n    Application is not exposed. You can expose services to the outside world by \nexecuting one or more of the commands below:\n      'oc expose svc/customerorderservice'\n    Run 'oc status' to view your app\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Check the logs to track the build and deployment. This will take few minutes to deploy"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"oc logs -f bc/customerorderservice\n")),Object(r.b)("p",{parentName:"li"},"  Once the deployment is completed, create the service for the application"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"oc expose svc/customerorderservice\noc status\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If you need to redeploy the app after some changes, you can do this by manually triggering the below command"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"oc start-build customerorderservice\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Now you can access the application by getting the hostname for the application by using get routes"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"oc get routes | grep customerorderservice\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Now configure the https route for the Application"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"open the browser and navigate to the OpenShift dashboard console")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"navigate to the ‘Routes’ in the Networking section of the left nav.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"click on the create Route button")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"provide name to the route")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"leave the hostname and the  Path as is.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"select the Service that you have created. Here it should be ‘customerorderservice’")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"select the target port as 9443 -> 9443 (TCP)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"check the ‘Secure Route’ checkbox ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"select the ‘TLS Termination’ as ‘Passthrough’")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"click on the ‘create’ button to create the https route. This will be used for accessing the application using the secured https protocol")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Test the app"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Open the browser and navigate to the OpenShift dashboard console")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Navigate to the ‘Topology’ section in the left nav.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select your project/name-space and then select the Application. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"After selection of the application, on the right you will be able to see details of the application in tabs/sections as Overview and Resources")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"As part of the Resource tab, you can get the routes of the application.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click the link of the https route  that you have created in the previous step to access the application")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The route will open a new tab. Add the Path /CustomerOrderServicesWeb at the end, to access the application")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The application would request for the secured access. Provide User name as ‘rbarcia’ and password as ‘bl0wfish’ to access the application")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You will be able to landup in the home page of the application."),Object(r.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.166666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABvklEQVQoz42S3W7aMBTHIyEkxBusr8czrVfAxfoMu5gqjRbYLrZqsKy0GR8zLawD0obm03Gc+L9jp1uL2CRs/WXnHJ+fz4mP5Xlb/LgeYGL3wa4+wxl+hPPlA6mL1eQTXHaBDRtgPRtgNf2KhWNjPhri9trGYspwaU+xXP7Cer2G67qw4jjGzWSEm+9D0gBzR8vG9NsF/DsH8WaG5J4hcRntGcIVQ3A3w+NyjNV8TrEM24ct0jRFkiQlkKcZHoMIWa6wufdwu/gJhf2hbVEqwYWEkMVfOydYGIaIoqgEJgnH1vOM8+TkDY6OXqHf7yPPpblZo5QqjKSURtqnlKK1MJlpmGZZeqONRVHe2Gw2UalUcPb+zHwLLgByKcoexX7WRaH2gTLPza16tFotVKtVnL87h/SpvAcOxASMKMtUwUxV6r/A/AWw3W6jXq+j2+mWARmVKilYu/Pnn3kwUJdcq9XQ6XSeAgqol1M9rweVfPz6GJZl4fTtKUDvkYc5VKxKiYNKjk2Gfx6l1+uh0WhgPBqbEhWnQHoXDYf8RysRmHNOsCeg7/umNXSGQoidgxnZMpntKtuVIOkeDILAAH8D3mY2EqQNVuwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"CustomerOrderServices",title:"CustomerOrderServices",src:"/ibm-gsi-cloudnative-journey/static/1eddb9e96bb3f33698f15d63310169ec/3cbba/twas-pbw.png",srcSet:["/ibm-gsi-cloudnative-journey/static/1eddb9e96bb3f33698f15d63310169ec/7fc1e/twas-pbw.png 288w","/ibm-gsi-cloudnative-journey/static/1eddb9e96bb3f33698f15d63310169ec/a5df1/twas-pbw.png 576w","/ibm-gsi-cloudnative-journey/static/1eddb9e96bb3f33698f15d63310169ec/3cbba/twas-pbw.png 1152w","/ibm-gsi-cloudnative-journey/static/1eddb9e96bb3f33698f15d63310169ec/0b124/twas-pbw.png 1728w","/ibm-gsi-cloudnative-journey/static/1eddb9e96bb3f33698f15d63310169ec/4ea69/twas-pbw.png 2304w","/ibm-gsi-cloudnative-journey/static/1eddb9e96bb3f33698f15d63310169ec/cb919/twas-pbw.png 2526w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))))))),Object(r.b)("p",null,"That’s it. You now have this application running on Liberty in a Docker container which is sufficient for this exercise."),Object(r.b)("h2",null,"Summary"),Object(r.b)("p",null,"You have now completed a simple Application with minor code changes as part of the Modernization exercises in multiple steps. This exercise demonstrated a simple Application modernization scenario that can be moved to cloud with code changes to the application."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-advanced-2-appmod-exercise-part-3-index-mdx-f904fe6fbf8cf9236663.js.map