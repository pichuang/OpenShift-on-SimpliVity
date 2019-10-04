(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{239:function(t,e,a){"use strict";a.r(e);var l=a(0),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"protecting-sensitive-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protecting-sensitive-information","aria-hidden":"true"}},[t._v("#")]),t._v(" Protecting sensitive information")]),t._v(" "),a("p",[t._v("A vault file is used to protect any sensitive variables that should not appear in clear text in your "),a("code",[t._v("group_vars/all/vars.yml")]),t._v(" file. The vault file will be encrypted and will require a password to be entered before it can be read or updated.")]),t._v(" "),a("p",[t._v("A sample vault file is provided named "),a("code",[t._v("group_vars/all/vault.sample")]),t._v(" that you can use as a model for your own vault file. All variables in the vault are defined as keys inside a "),a("code",[t._v("vault")]),t._v(" dictionary.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vault.vcenter_password")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The password for the "),a("code",[t._v("vcenter_username")]),t._v(" user above.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vault.vcenter_password")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The password for SimpliVity, typically the same as "),a("code",[t._v("vault.vcenter_password")]),t._v(". Currently not used.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vault.rhn_orgid")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Organization ID in the Red Hat customer portal. Used together  with the "),a("code",[t._v("rhn_key")]),t._v(" variable.  When using the combination of "),a("code",[t._v("rhn_orgid")]),t._v(" and "),a("code",[t._v("rhn_key")]),t._v(", you "),a("strong",[t._v("must")]),t._v(" set the   "),a("code",[t._v("rhn_user")]),t._v(" and "),a("code",[t._v("rhn_pass")]),t._v(" variables to "),a("code",[t._v("''")]),t._v(". The specified activation key "),a("strong",[t._v("must")]),t._v(" be associated with a valid OpenShift subscription.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vault.rhn_key")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("An existing activation key in the organization specified above.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vault.rhn_user")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("If you are not using activation keys, you may specify your username for the Red Hat Network. When using the combination of "),a("code",[t._v("rhn_user")]),t._v(" and "),a("code",[t._v("rhn_pass")]),t._v(" you "),a("strong",[t._v("must")]),t._v(" set the "),a("code",[t._v("rhn_orgid")]),t._v(" and "),a("code",[t._v("rhn_key")]),t._v(" variables to "),a("code",[t._v("''")]),t._v(". The specified user "),a("strong",[t._v("must")]),t._v(" be associated with a valid OpenShift subscription.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vault.rhn_pass")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Password for the user specified with "),a("code",[t._v("rhn_user")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vault.pull_secret")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The pull secret obtained from Red Hat installation web page")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vault.ssh_key")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Your public SSH key")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ldap_bind_user_password")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The password of the Bind DN user when integrating with an LDAP Directory")])])])]),t._v(" "),a("h1",{attrs:{id:"encrypting-your-vault"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encrypting-your-vault","aria-hidden":"true"}},[t._v("#")]),t._v(" Encrypting your vault")]),t._v(" "),a("p",[t._v("To encrypt the vault you need to run the following command:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# ansible-vault encrypt group_vars/all/vault.yml\n")])])]),a("p",[t._v("You will be prompted for a password that will decrypt the vault when required. You can update the values in your vault by running:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# ansible-vault edit group_vars/all/vault.yml\n")])])]),a("p",[t._v("In order for Ansible to be able to read the vault, you need to specify  where the password is stored, for instance, in a file called "),a("code",[t._v(".vault_pass")]),t._v(". Once the file is created, take the following precautions to avoid illegitimate access to this file:")]),t._v(" "),a("ol",[a("li",[t._v("Change the permissions so only root can read it using "),a("code",[t._v("# chmod 600 .vault_pass")])]),t._v(" "),a("li",[t._v("Add the file to your "),a("code",[t._v(".gitignore")]),t._v(" file if you are using a Git repository to manage your playbooks.")])]),t._v(" "),a("p",[t._v("When you use a vault, you must specify the password file every time on the command line, for example,")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# ansible-playbook -i hosts site.yml --vault-password-file .vault_pass\n")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);