(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{210:function(t,e,l){"use strict";l.r(e);var a=l(0),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"openshift-configuration"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#openshift-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" OpenShift configuration")]),t._v(" "),l("p",[t._v("All the variables are mandatory, unless otherwise stated.")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("local_home")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Local user's HOME directory. Defaults to the "),l("code",[t._v("HOME")]),t._v(" environment variable")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("ocp_installer_path")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Path to the downloaded OCP installer. Defaults to "),l("code",[t._v("<<local_home>>/kits/openshift-install")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("ocp_oc_path")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Path to the downloaded "),l("code",[t._v("oc")]),t._v(" client. Defaults to "),l("code",[t._v("<<local_home>>/kits/oc")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("ocp_kubectl_path")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Path to the downloaded "),l("code",[t._v("kubectl")]),t._v(" client. Defaults to "),l("code",[t._v("<<local_home>>/kits/kubectl")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("vault.pull_secret")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("group_vars/all/vault.yml")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The pull secret obtained from Red Hat installation web page")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("install_dir")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The directory where files that are generated as part of the OCP installation will be saved. If you are re-running the playbooks after a previous deployment, you should delete any existing content in this folder first. Defaults to "),l("code",[t._v("<<local_home>>/.ocp")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("master_ova_path")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Path to RHCOS OVA for master nodes. Defaults to "),l("code",[t._v("~/kits/rhcos-4.1.0-x86_64-vmware.ova")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("worker_ova_path")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Path to RHCOS OVA for worker nodes. Defaults to same value as "),l("code",[t._v("master_ova_path")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("master_template")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Name of template generated from master OVA. Defaults to "),l("code",[t._v("hpe-rhcos")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("worker_template")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Name of template generated from worker OVA. Uses the same value as "),l("code",[t._v("master_template")]),t._v(" if the same OVA is used for both master and worker nodes.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("support_template")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The template used to create support machines including the load balancers, NFS and nodes hosting DNS and DHCP services. If this value is not present, the playbooks will use the support OVA specified by "),l("code",[t._v("support_ova_path")]),t._v(". Defaults to "),l("code",[t._v("hpe-rhel760")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("support_ova_path")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Instead of specifiying a template for supportstructure machines, you can  use an OVA instead.  Defaults to "),l("code",[t._v("~/kits/hpe-rhel760.ova")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("support_folder")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("This folder is created (if it does not already exist) for the non-OCP VMs and templates. Defaults to "),l("code",[t._v("hpeSupport")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("vault.ssh_key")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("group_vars/all/vault.yml")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The public SSH key for the "),l("code",[t._v("core")]),t._v(" user")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);