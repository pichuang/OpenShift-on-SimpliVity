(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{223:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"configuring-cluster-logging"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuring-cluster-logging","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuring cluster logging")]),e._v(" "),r("h2",{attrs:{id:"deploying-worker-nodes-for-cluster-logging"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploying-worker-nodes-for-cluster-logging","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploying worker nodes for cluster logging")]),e._v(" "),r("p",[e._v("Elasticsearch is a memory-intensive application. Each Elasticsearch node needs 16G of memory  and extra CPU resources. The initial set of OpenShift Container Platform nodes might not be large enough to support the Elasticsearch cluster. You must add additional nodes to the OpenShift Container Platform cluster to run with the recommended or higher memory and CPU requirements. Each Elasticsearch node can operate with a lower memory setting though this is not recommended for production deployments.")]),e._v(" "),r("p",[e._v("You should add new worker nodes to your cluster to facilitate hosting the logging stack, setting the "),r("code",[e._v("cpu")]),e._v(" and\n"),r("code",[e._v("ram")]),e._v(" attributes to sufficiently large values for a production environment. In your hosts file, add new entries in the "),r("code",[e._v("[rhcos_worker]")]),e._v(" group:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[rhcos_worker]\nhpe-worker0   ansible_host=10.15.155.213\nhpe-worker1   ansible_host=10.15.155.214\nhpe-worker2   ansible_host=10.15.155.215  cpus=8 ram=32768  # Larger worker node for EFK\nhpe-worker3   ansible_host=10.15.155.216  cpus=8 ram=32768  # Larger worker node for EFK\nhpe-worker4   ansible_host=10.15.155.217  cpus=8 ram=32768  # Larger worker node for EFK\n")])])]),r("p",[e._v("In the above example, each of these large CoreOS worker nodes will be allocated 8 virtual CPU cores and 32GB of RAM. These values override the default limits of 4 virtual CPU cores and 16GB RAM defined in the "),r("code",[e._v("group_vars/worker.yml")]),e._v(" file.")]),e._v(" "),r("p",[e._v("Deploy the additional, large worker nodes using the procedure described in the section Deploying CoreOS nodes.")]),e._v(" "),r("h2",{attrs:{id:"elasticsearch-storage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-storage","aria-hidden":"true"}},[e._v("#")]),e._v(" Elasticsearch storage")]),e._v(" "),r("p",[e._v("You can configure a persistent storage class and size for the Elasticsearch cluster. The Cluster Logging Operator creates a PersistentVolumeClaim for each data node in the Elasticsearch cluster based on these parameters.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[e._v("File")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("efk_es_pv_size")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("playbooks/roles/efk/vars/main.yml")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Size of the Persistent Volume used to hold Elasticsearch data. The default size is "),r("code",[e._v("'200G'")]),e._v(".")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("efk_es_pv_storage_class")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("playbooks/roles/efk/vars/main.yml")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("The Storage Class to use when creating Elasticsearch Persistent Volumes. The default storage class name is "),r("code",[e._v("'thin'")]),e._v(".")])])])]),e._v(" "),r("h1",{attrs:{id:"customizing-cluster-logging"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#customizing-cluster-logging","aria-hidden":"true"}},[e._v("#")]),e._v(" Customizing cluster logging")]),e._v(" "),r("p",[e._v("The template file "),r("code",[e._v("playbooks/roles/efk/templates/clo-crd.yml.j2")]),e._v(" contains the configuration used for deploying\nElasticsearch, Fluentd and Kibana.  The "),r("code",[e._v("requests")]),e._v(" and "),r("code",[e._v("limits")]),e._v(" settings for the resources required for each of the logging components can be modified in this file.")])])}),[],!1,null,null,null);t.default=a.exports}}]);