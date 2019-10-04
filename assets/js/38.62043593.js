(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{258:function(t,e,a){"use strict";a.r(e);var i=a(0),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"verify-prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify-prerequisites","aria-hidden":"true"}},[t._v("#")]),t._v(" Verify prerequisites")]),t._v(" "),a("p",[t._v("Before you start deployment, you must assemble the information required to assign values for each and every\nvariable used by the playbooks. The variables are fully documented in the section Configuring the solution.\nA brief overview of the information required is presented in the table below.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Component")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Details")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Virtual Infrastructure")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("ESXi cluster of three machines"),a("br"),a("br"),t._v("vCenter 6.7U1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The FQDN of your vCenter server and the name of the Datacenter. You will also need administrator credentials in order to create templates and spin up virtual machines.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("L3 Network requirements")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1x Bootstrap"),a("br"),a("br"),t._v("2x Support, 2x Load balancer, 1x NFS"),a("br"),a("br"),t._v("3x master, 2x worker")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("You will need one IP address for each and every VM configured in the Ansible inventory. "),a("br"),t._v("You will also need to allocate at least 2 additional addresses for the virtual IPs used by the loadbalancers.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("NTP Services")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IP addresses of your time servers (NTP)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Time services must be configured in your environment. The deployed solution uses certificates that are time-sensitive.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("OpenShift Subscription")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Organization ID and authorization key"),a("br"),t._v("Alternatively a username and password.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])])])}),[],!1,null,null,null);e.default=r.exports}}]);