(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{219:function(t,e,a){"use strict";a.r(e);var s=a(0),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cluster-monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-monitoring","aria-hidden":"true"}},[t._v("#")]),t._v(" Cluster monitoring")]),t._v(" "),a("p",[t._v("You can configure persistent storage for the cluster monitoring components using the Ansible playbook\n"),a("code",[t._v("playbooks/monitoring.yml")]),t._v(". This playbook automates the configuration of persistent storage for the Prometheus\nand Alertmanager pods.")]),t._v(" "),a("p",[t._v("A separate storage volume is created for each Prometheus and Alertmanager pod. On the OpenShift Container Platform,\nthis is achieved using persistent volume claims (PVC) and persistent volumes (PV). You can customize both the storage\nclass and the size of the persistent volumes used to store Prometheus and Alertmanager data by editing the\nfollowing variables in the file "),a("code",[t._v("playbooks/roles/monitoring/vars/main.yml")]),t._v(":")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("prometheus_pv_size")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Size of the persistent volume used to hold Prometheus data (default size is "),a("code",[t._v("'40Gi'")]),t._v(")")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("prometheus_pv_storage_class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The storage class to use when creating Prometheus persistent volumes (default storage class name is "),a("code",[t._v("'thin'")]),t._v(")")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("alertmanager_pv_size")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Size of the persistent volume used to hold Alertmanager data (default size is "),a("code",[t._v("'40Gi'")]),t._v(")")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("alertmanager_pv_storage_class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The storage class to use when creating Alertmanager persistent volumes (default storage class name is "),a("code",[t._v("'thin'")]),t._v(")")])])])]),t._v(" "),a("p",[t._v("After making the appropriate customizations to the above variables, re-deploy the  cluster monitoring components by changing into the directory where you cloned the OpenShift-on-SimpliVity repository and running the appropriate playbook:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cd ~/OpenShift-on-SimpliVity\n\n$ ansible-playbook -i hosts playbooks/monitoring.yml\n")])])]),a("p",[t._v("The playbook takes approximately 1-2 minutes to complete.  However, it may take some additional time for the various cluster monitoring components to successfully re-launch with their newly created persistent storage volumes.")])])}),[],!1,null,null,null);e.default=o.exports}}]);