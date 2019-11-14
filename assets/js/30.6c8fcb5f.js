(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{224:function(e,a,t){"use strict";t.r(a);var n=t(0),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"validating-the-cluster-logging-deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validating-the-cluster-logging-deployment","aria-hidden":"true"}},[e._v("#")]),e._v(" Validating the cluster logging deployment")]),e._v(" "),t("p",[e._v("To verify the cluster logging deployment, in the web console:")]),e._v(" "),t("ul",[t("li",[e._v("Switch to the "),t("code",[e._v("Workloads")]),e._v(" -> "),t("code",[e._v("Pods")]),e._v(" page")]),e._v(" "),t("li",[e._v("Select the "),t("code",[e._v("openshift-logging")]),e._v(" project")])]),e._v(" "),t("p",[e._v("You should see several pods for cluster logging, Elasticsearch, Fluentd, and Kibana similar to the following list:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cluster-logging-operator-cb795f8dc-xkckc\nelasticsearch-cdm-b3nqzchd-1-5c6797-67kfz\nelasticsearch-cdm-b3nqzchd-2-6657f4-wtprv\nelasticsearch-cdm-b3nqzchd-3-588c65-clg7g\nfluentd-2c7dg\nfluentd-9z7kk\nfluentd-br7r2\nfluentd-fn2sb\nfluentd-pb2f8\nfluentd-zqgqx\nkibana-7fb4fd4cc9-bvt4p\nkibana-7fb4fd4cc9-st4cs\n")])])]),t("p",[e._v("Alternatively, you can use the "),t("code",[e._v("oc")]),e._v(" client instead:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# oc get pod -n openshift-logging\n")])])]),t("h2",{attrs:{id:"access-the-kibana-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-the-kibana-dashboard","aria-hidden":"true"}},[e._v("#")]),e._v(" Access the Kibana Dashboard")]),e._v(" "),t("p",[e._v("Once the Cluster Logging instance has deployed successfully a new entry called "),t("code",[e._v("Logging")]),e._v(" will appear under the\n"),t("code",[e._v("Monitoring")]),e._v(" tab of the OpenShift Container Platform dashboard. Selecting the Logging entry will launch the\nKibana Dashboard in a separate browser tab.")]),e._v(" "),t("p",[e._v("The Kibana dashboard can also be accessed directly at:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("https://kibana-openshift-logging.apps.<<cluster_name>>.<<domain_name>>\n")])])]),t("p",[e._v("where "),t("code",[e._v("<<cluster_name>>")]),e._v(" and "),t("code",[e._v("<<domain_name>>")]),e._v(" match the "),t("code",[e._v("cluster_name")]),e._v(" and "),t("code",[e._v("domain_name")]),e._v(" variables configured in the "),t("code",[e._v("group_vars/all/vars.yml")]),e._v(" file.")])])}),[],!1,null,null,null);a.default=s.exports}}]);