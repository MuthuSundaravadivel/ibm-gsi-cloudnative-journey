(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{yHED:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return p}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},c=l("PageDescription"),s=l("InlineNotification"),b={_frontmatter:r},u=o.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(u,i({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"PageDescription"},Object(n.b)("p",null,"The following steps verify you have access to the IBM Cloud Enterprise\nSandbox")),Object(n.b)("p",null,"Congratulations on becoming part of the IBM Cloud-Native Learning Journey. You should have received a Welcome email that provides the details of the IBM Cloud Sandbox you’ve been assigned to and pointing you to this welcome page. By participating in this Cloud-Native Learning Journey, you have access to:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The crafted education journey Agenda"),Object(n.b)("li",{parentName:"ul"},"A RedHat OpenShift managed service cluster that has been pre-installed with the IBM Garage Cloud-Native Toolkit and IBM Cloud Pak for Applications."),Object(n.b)("li",{parentName:"ul"},"The development environment is pre-configured in a pay-as-you-go IBM Cloud account which you’ll use to perform your learning tasks.")),Object(n.b)(s,{kind:"warning",mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Warning:")," If you did not receive the Welcome email this will mean you may\nnot have been given access to the IBM Cloud account. Please contact your\nBusiness Development Executive or your Lab Leader to validate your invite")),Object(n.b)("h2",null,"Notification"),Object(n.b)("p",null,"The Welcome email gives you detail on how to access the development environment for team."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"IBM Cloud Sandbox Registration Details")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Account"),": This is the IBM Cloud account with a configured sandbox development environment, this will enable you to complete the learning agenda"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Team"),": This is the name of your development team"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"GitHub Organization"),": This is the GitHub organization that will be used for storing your code during your learning activities"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Resource Group"),": This is the IBM Cloud resource group where the development cluster and cloud resources have been provisioned."),Object(n.b)("li",{parentName:"ul"},"Example of the key information in your email:",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"Cloud               : https://cloud.ibm.com/\nAccount             : 1924691 - GSI Labs - IBM\nLocation            : London (eu-gb)\nSandbox Team        : Cloud-Native Squad\nGitHub Organization : https://github.com/gsi-enablement-one\nResource Group      : gsi-cloudnative-squad\n")))),Object(n.b)("h2",null,"Sandbox"),Object(n.b)("p",null,"For Developer Foundation Hands-on Labs.  We can do it in Following  ",Object(n.b)("strong",{parentName:"p"},"Sandbox")," Environment."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"IBM Kubernetes Containers"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"IBM Openshift Containers"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"katacoda Interactive Shell"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Openshift Interactive Shell"),"."))),Object(n.b)("h2",null,"IBM Cloud Openshift Containers and Kubernetes Containers."),Object(n.b)(s,{mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note"),": If you have issues with any of the following steps, please raise an issue on the Slack channel ",Object(n.b)("strong",{parentName:"p"},"#gsi-labs-external")," ",Object(n.b)("a",i({parentName:"p"},{href:"https://gsicsi.slack.com/archives/CSRDJD5HA"}),"Slack Channel"),". All issues should be raised on this slack channel.")),Object(n.b)("p",null,"Follow these steps to check you can access your team’s Developer Tools environment."),Object(n.b)("p",null,"Login and view the resources."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Login to the ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com"}),"IBM Cloud")),Object(n.b)("li",{parentName:"ul"},"The Welcome email with the IBM Cloud Sandbox Registration Details will tell you your account, team, GitHub organization, and resource group"),Object(n.b)("li",{parentName:"ul"},"In the IBM Cloud console, switch to the account specified in the email"),Object(n.b)("li",{parentName:"ul"},"Navigate to the ",Object(n.b)("em",{parentName:"li"},"Resource List")),Object(n.b)("li",{parentName:"ul"},"In the Group filter, select your team’s resource group"),Object(n.b)("li",{parentName:"ul"},"Click on ",Object(n.b)("strong",{parentName:"li"},"Expand All")," (top right) to show all of the resources in your resource group"),Object(n.b)("li",{parentName:"ul"},"Under Cluster, you should see the cluster named ",Object(n.b)("inlineCode",{parentName:"li"},"sandbox-ocp43-{team}"),"\n(where ",Object(n.b)("inlineCode",{parentName:"li"},"{team}")," is the name of your team some clusters may have number when there is more\nthan one of that type)")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Explore the Red Hat OpenShift resources and set up the CLI"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"In the Tags filter, enter both ",Object(n.b)("inlineCode",{parentName:"li"},"ocp")," to see just the Red Hat\nOpenShift cluster and services\n",Object(n.b)("span",i({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"776px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"73.61111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAACXklEQVQ4y52Sy07bUBCG/QDABoFYgRC8dFddR0Rc3qCbsixSC0oIIYnvdhzfYie+++/MOEkTddUe6fPxuc35Z/6jnJ2d4fr6GhcXFzg6OsLx8TFOT09xc3NzwO3trey7uroSLi8vZcxr5+fncv7k5ARKv9/H09MTHh8fwf9bHh4eZG4fnru/v9/BY+bu7k7O9Ho9KG3bwjAMWJYFx3GkX6/X+N+mLJdLuK6L+XwuAZnFYoEoiv4ijrs+DMPNXLhHt6bwZzKZ4PX1FaZpikLuWbWu6zs0TcP7+wgf40+YlgNV06HqBvUGZqouaDSnrFYrUuTDtu0DpS71cRwLEbFcxnAXCb587eHb9x9QrRCjqYOx6kG1I2h2jJm9gpJlGZIkFVWsNs9zgeeLothRlgVWWYmXXyN8qja8IIXjxXAWVDI/wZzw46wLmNMBh9Qxc8/DOsvRborMpjHcqqqU+nINWXFMAhLyYJUmSIksW0MRNZS2ZegIKViWJGhITVuWaOsaDQVrmkaCllUlZdG5vvIybARBAC5bmqbyOpScPo02QfLzBdH0A+nsEwlR6lPAd9GQMg7IjS+fzlQxZKZq8EjA1nUmITGScrHw4I2GcMYj2B9DRIaGyp+DpB8EZBXPz894e3vDcDjEYDCAqqryAvgl+L7PKRdYExa5apj0ZNhtriOpafZq2G5Sr2ui6ejG9Q4eKyXVKqO0LcOUG/ifXa3rCu2mdv+CUlDAKisQmS48v3Mw2NSkERV/TOGL2GU2IgjCTtVG+RZRmJfkHm3gjayS2QZsdy7jMGAYSvqyvqfwN7FwOGopcKeYAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Resource List",title:"Resource List",src:"/ibm-gsi-cloudnative-journey/static/c20e83462a694c1bb2b056a5b32390ac/5ff3d/devtoolsservices.png",srcSet:["/ibm-gsi-cloudnative-journey/static/c20e83462a694c1bb2b056a5b32390ac/7fc1e/devtoolsservices.png 288w","/ibm-gsi-cloudnative-journey/static/c20e83462a694c1bb2b056a5b32390ac/a5df1/devtoolsservices.png 576w","/ibm-gsi-cloudnative-journey/static/c20e83462a694c1bb2b056a5b32390ac/5ff3d/devtoolsservices.png 776w"],sizes:"(max-width: 776px) 100vw, 776px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ul"},"Click on the name of each cloud service instance and verify you can open each one’s dashboard"),Object(n.b)("li",{parentName:"ul"},"Click on the names of the Red Hat OpenShift cluster to open its dashboard"),Object(n.b)("li",{parentName:"ul"},"Switch to the ",Object(n.b)("strong",{parentName:"li"},"Access")," tab"),Object(n.b)("li",{parentName:"ul"},"Follow the instructions to install the CLI, access the cluster from the CLI, and validate that you are successfully connected"),Object(n.b)("li",{parentName:"ul"},"Press the ",Object(n.b)("em",{parentName:"li"},"OpenShift web console")," button and verify that you can open the Red Hat OpenShift console")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Explore the IKS resources and set up the CLI"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Return to the ",Object(n.b)("strong",{parentName:"li"},"Resource List")),Object(n.b)("li",{parentName:"ul"},"Remove the ",Object(n.b)("inlineCode",{parentName:"li"},"ocp")," tags and add the ",Object(n.b)("inlineCode",{parentName:"li"},"iks")," tag"),Object(n.b)("li",{parentName:"ul"},"Repeat the same steps for your team’s Kubernetes cluster and services")),Object(n.b)(s,{kind:"success",mdxType:"InlineNotification"},Object(n.b)("p",null,"You have completed this task if you have:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Managed to access IBM Cloud account"),Object(n.b)("li",{parentName:"ul"},"Viewed your team’s Red Hat OpenShift cluster"),Object(n.b)("li",{parentName:"ul"},"Accessed the cluster from the command line"))),Object(n.b)("h2",null,"katacoda"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Katacoda is a Interactive Learning and Traning Platform.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Katacoda provides the browser based hands on labs without any downloads or configuration.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Learn Kubernetes using Interactive Browser-Based Scenarios. ",Object(n.b)("a",i({parentName:"p"},{href:"https://www.katacoda.com/courses/kubernetes"}),"Kubernetes"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Learn Opneshift using Interactive Browser-Based Scenarios. ",Object(n.b)("a",i({parentName:"p"},{href:"https://www.katacoda.com/openshift"}),"Opneshift"),"."))),Object(n.b)("h2",null,"Openshift Interactive Learning Platform"),Object(n.b)("p",null,"Openshift Interactive Learning Scenarios provide you with a pre-configured OpenShift instance, accessible from your browser without any downloads or configuration."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Learn Openshift using Interactive browser based shell. ",Object(n.b)("a",i({parentName:"li"},{href:"https://learn.openshift.com/"}),"Openshift"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-checksetup-index-mdx-0b4051bd909ac81a1aae.js.map