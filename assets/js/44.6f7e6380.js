(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{259:function(a,e,t){"use strict";t.r(e);var n=t(0),r=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"application-software"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#application-software","aria-hidden":"true"}},[a._v("#")]),a._v(" Application software")]),a._v(" "),t("h2",{attrs:{id:"prometheus-and-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prometheus-and-grafana","aria-hidden":"true"}},[a._v("#")]),a._v(" Prometheus and Grafana")]),a._v(" "),t("p",[a._v("OpenShift Container Platform includes a pre-configured, pre-installed, and self-updating monitoring stack that is based\non the Prometheus open source project and its wider eco-system. It provides monitoring of cluster components and includes\na set of alerts to immediately notify the cluster administrator about any occurring problems, as well as a set of Grafana\ndashboards. The cluster monitoring stack is only supported for monitoring OpenShift Container Platform clusters. If you\nwish to monitor your own application workloads, you should deploy a separate Prometheus instance.")]),a._v(" "),t("p",[a._v("All the components of the monitoring stack are monitored by the stack and are automatically updated when OpenShift Container Platform is updated.")]),a._v(" "),t("p",[a._v("The monitoring stack also monitors cluster components including:")]),a._v(" "),t("ul",[t("li",[a._v("etcd")]),a._v(" "),t("li",[a._v("Kubernetes apiserver, controller manager, scheduler")]),a._v(" "),t("li",[a._v("OpenShift apiserver, controller manager, Lifecycle Manager")]),a._v(" "),t("li",[a._v("CoreDNS and HAProxy")]),a._v(" "),t("li",[a._v("Image registry")]),a._v(" "),t("li",[a._v("Elasticsearch and Fluentd (if cluster logging is installed)")])]),a._v(" "),t("p",[a._v("For more information about the monitoring stack, see the documentation at "),t("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.1/monitoring/cluster-monitoring/about-cluster-monitoring.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.openshift.com/container-platform/4.1/monitoring/cluster-monitoring/about-cluster-monitoring.html"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("h2",{attrs:{id:"elasticsearch-fluentd-and-kibana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-fluentd-and-kibana","aria-hidden":"true"}},[a._v("#")]),a._v(" Elasticsearch, Fluentd and Kibana")]),a._v(" "),t("p",[a._v("HPE provides an additional playbook to deploy the integrated cluster logging stack, which aggregates logs for a range of OpenShift Container Platform services.")]),a._v(" "),t("p",[a._v("The cluster logging components are based upon Elasticsearch, Fluentd, and Kibana (EFK). The collector, Fluentd, is\ndeployed to each node in the OpenShift Container Platform cluster. It collects all node and container logs and writes\nthem to Elasticsearch (ES). Kibana is the centralized, web UI where users and administrators can create rich\nvisualizations and dashboards with the aggregated data.")]),a._v(" "),t("h3",{attrs:{id:"fluentd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fluentd","aria-hidden":"true"}},[a._v("#")]),a._v(" Fluentd")]),a._v(" "),t("p",[a._v("OpenShift Container Platform uses Fluentd to collect data about your cluster. Fluentd is deployed as a DaemonSet in\nOpenShift Container Platform, which deploys pods to each OpenShift Container Platform node. Fluentd uses journald as the\nsystem log source. These are log messages from the operating system, the container runtime, and OpenShift Container\nPlatform.")]),a._v(" "),t("h3",{attrs:{id:"elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch","aria-hidden":"true"}},[a._v("#")]),a._v(" Elasticsearch")]),a._v(" "),t("p",[a._v("OpenShift Container Platform uses Elasticsearch (ES) to organize the log data from Fluentd into datastores, or indices.\nElasticsearch subdivides each index into multiple pieces called shards, which it spreads across a set of Elasticsearch\nnodes in an Elasticsearch cluster. You can configure Elasticsearch to make copies of the shards, called replicas.\nElasticsearch also spreads these replicas across the Elasticsearch nodes.")]),a._v(" "),t("h3",{attrs:{id:"kibana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kibana","aria-hidden":"true"}},[a._v("#")]),a._v(" Kibana")]),a._v(" "),t("p",[a._v("OpenShift Container Platform uses Kibana to display the log data collected by Fluentd and indexed by Elasticsearch.\nKibana is a browser-based console interface to query, discover, and visualize your Elasticsearch data through histograms,\nline graphs, pie charts, heat maps, built-in geospatial support, and other visualizations.")])])}),[],!1,null,null,null);e.default=r.exports}}]);