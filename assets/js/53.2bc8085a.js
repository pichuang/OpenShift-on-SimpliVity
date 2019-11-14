(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{243:function(t,e,i){"use strict";i.r(e);var a=i(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"solution-sizing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#solution-sizing","aria-hidden":"true"}},[t._v("#")]),t._v(" Solution sizing")]),t._v(" "),i("p",[t._v("By default, the Ansible playbooks create VMs according to the following recommended specifications. You can override\nthese recommended values in the configuration files, as detailed in the section "),i("code",[t._v("Configuring the solution")]),t._v(".")]),t._v(" "),i("h2",{attrs:{id:"bootstrap-node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-node","aria-hidden":"true"}},[t._v("#")]),t._v(" Bootstrap node")]),t._v(" "),i("p",[t._v("A single bootstrap node is required to assist in the OCP deployment. You can delete the bootstrap VM after the cluster\nhas been successfully deployed.")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("VM")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("OS")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Sizing")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Bootstrap")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("CoreOS")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("4x vCPU"),i("br"),t._v("16GB RAM"),i("br"),t._v("120GB disk space")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("This is the RH minimum requirement")])])])]),t._v(" "),i("h2",{attrs:{id:"supporting-nodes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#supporting-nodes","aria-hidden":"true"}},[t._v("#")]),t._v(" Supporting nodes")]),t._v(" "),i("p",[t._v("Two supporting nodes are deployed by default, providing DHCP and DNS services for the cluster. Two load balancer VMs and an NFS VM are also configured.")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("VM")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("OS")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Sizing")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Support")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("RHEL 7.6")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("2x vCPU"),i("br"),t._v("4GB RAM"),i("br"),t._v("60GB disk space")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Providing DHCP and DNS services on the internal VLAN. You can configure one (no HA)")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Load balancers")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("RHEL 7.6")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("2x vCPU"),i("br"),t._v("4GB RAM"),i("br"),t._v("60GB disk space")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Two load balancers are deployed by default. You can configure one (no HA) or 0 where you use your own existing load balancers")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("NFS")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("RHEL 7.6")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("2x vCPU"),i("br"),t._v("4GB RAM"),i("br"),t._v("60GB disk space")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Required for persistent storage for the OpenShift Registry")])])])]),t._v(" "),i("h2",{attrs:{id:"ocp-cluster-nodes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ocp-cluster-nodes","aria-hidden":"true"}},[t._v("#")]),t._v(" OCP cluster nodes")]),t._v(" "),i("p",[t._v("By default, 3 master nodes are deployed for high availability. A minimum of 2 worker nodes are required.")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("VM")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("OS")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Sizing")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Masters")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("CoreOS")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("4x vCPU"),i("br"),t._v("16GB RAM"),i("br"),t._v("120GB disk space")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("This is the RH minimum requirement")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Workers")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("CoreOS")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("2x vCPU"),i("br"),t._v("16GB RAM"),i("br"),t._v("120GB disk space")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("This is the RH minimum requirement")])])])]),t._v(" "),i("p",[t._v("Similar sizing requirements will apply for any worker nodes (CoreOS or RHEL) added to the cluster after the\ninitial deployment.")]),t._v(" "),i("h2",{attrs:{id:"ocp-infrastructure-components"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ocp-infrastructure-components","aria-hidden":"true"}},[t._v("#")]),t._v(" OCP infrastructure components")]),t._v(" "),i("p",[t._v("The following OpenShift Container Platform components are infrastructure components:")]),t._v(" "),i("ul",[i("li",[t._v("Kubernetes and OpenShift Container Platform control plane services that run on masters")]),t._v(" "),i("li",[t._v("The default router")]),t._v(" "),i("li",[t._v("The container image registry")]),t._v(" "),i("li",[t._v("The cluster metrics collection, or monitoring service")]),t._v(" "),i("li",[t._v("Cluster aggregated logging")]),t._v(" "),i("li",[t._v("Service brokers")])]),t._v(" "),i("p",[t._v("Any node that runs any other container, pod, or component is a worker node that your Red Hat OpenShift subscription must cover.")]),t._v(" "),i("p",[t._v("The default router, image registry and monitoring service are initially deployed on the two worker nodes. These can be rescheduled onto specific infrastructure nodes as outlined in the section "),i("code",[t._v("Post deployment tasks")]),t._v(".")]),t._v(" "),i("h2",{attrs:{id:"cluster-logging"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cluster-logging","aria-hidden":"true"}},[t._v("#")]),t._v(" Cluster Logging")]),t._v(" "),i("p",[t._v("Cluster logging is very resource intensive, so the sizing requirements are increased compared to other nodes\nin the cluster.")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("VM")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("OS")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Sizing")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Logging")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("CoreOS")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("8x vCPU"),i("br"),t._v("32GB RAM"),i("br"),t._v("120GB disk space")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("This is the RH recommended requirement")])])])]),t._v(" "),i("p",[t._v("Cluster logging is not deployed by default. Instructions for deploying the logging stack and scheduling it\non specific nodes with the required resources is described in the section "),i("code",[t._v("Deploying cluster logging")]),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);