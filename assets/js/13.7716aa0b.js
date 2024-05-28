(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{430:function(t,a,s){t.exports=s.p+"assets/img/Spark核心模块.515d30c7.png"},476:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("Apache Spark是一个统一的计算引擎，设计用于大型分布式数据处理、数据中心或云计算。")]),t._v(" "),a("p",[t._v("Spark基于内存进行迭代计算，使它比Hadoop MapReduce要快得多。而且它包含了用于机器学习的多种API库（MLlib）、用于交互式查询的SQL（Spark SQL）、用于与实时数据交互的流处理（结构化流）以及图计算（GraphX）这些功能模块。")])]),t._v(" "),a("h2",{attrs:{id:"spark核心模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spark核心模块"}},[t._v("#")]),t._v(" Spark核心模块")]),t._v(" "),a("img",{attrs:{src:s(430),alt:"VuePress Logo"}}),t._v(" "),a("ul",[a("li",[t._v("Spark Core")])]),t._v(" "),a("blockquote",[a("p",[t._v("提供了Spark核心的基础和核心的功能")])]),t._v(" "),a("ul",[a("li",[t._v("Spark SQL")])]),t._v(" "),a("blockquote",[a("p",[t._v("提供了一些操作结构化数据库的工具，例如：Hive等")])]),t._v(" "),a("ul",[a("li",[t._v("Spark Streaming")])]),t._v(" "),a("blockquote",[a("p",[t._v("提供了一些流操作的工具")])]),t._v(" "),a("ul",[a("li",[t._v("Spark MLLib")])]),t._v(" "),a("blockquote",[a("p",[t._v("提供了一些机器学习相关的工具算法，可以做一些简单的机器学习的工作")])]),t._v(" "),a("ul",[a("li",[t._v("Spark GrophX")])]),t._v(" "),a("blockquote",[a("p",[t._v("提供了一些图形计算的一些工具和算法")])]),t._v(" "),a("h2",{attrs:{id:"spark环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spark环境搭建"}},[t._v("#")]),t._v(" Spark环境搭建")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("Spark是由scala语言开发，首先需要安装scala，并掌握基础的scala较好")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/blogs/大数据/scala/Scala.html"}},[t._v("Scala学习路线")])],1),t._v(" "),a("li",[t._v("Scala和Spark版本对应(可查看Spark官网进行查看版本)：https://mvnrepository.com/artifact/org.apache.spark/spark-core")])])]),t._v(" "),a("blockquote",[a("p",[t._v("使用Docker搭建集群模式进行测试 (一主二从)")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull bitnami/spark:3\n")])])])]),t._v(" "),a("ul",[a("li",[t._v("在自定义工作目录创建，docker-compose.yml")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spark")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docker.io/bitnami/spark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_MODE=master\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_RPC_AUTHENTICATION_ENABLED=no\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_RPC_ENCRYPTION_ENABLED=no\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_LOCAL_STORAGE_ENCRYPTION_ENABLED=no\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_SSL_ENABLED=no\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ~/docker/spark/share"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/opt/share\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8180:8080'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4040:4040'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spark-worker-1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docker.io/bitnami/spark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" worker1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_MODE=worker\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_MASTER_URL=spark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7077")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_WORKER_MEMORY=1G\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_WORKER_CORES=1\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_RPC_AUTHENTICATION_ENABLED=no\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_RPC_ENCRYPTION_ENABLED=no\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_LOCAL_STORAGE_ENCRYPTION_ENABLED=no\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_SSL_ENABLED=no\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ~/docker/spark/share"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/opt/share\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8081:8081'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spark-worker-2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docker.io/bitnami/spark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" worker2\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_MODE=worker\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_MASTER_URL=spark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7077")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_WORKER_MEMORY=1G\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_WORKER_CORES=1\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_RPC_AUTHENTICATION_ENABLED=no\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_RPC_ENCRYPTION_ENABLED=no\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_LOCAL_STORAGE_ENCRYPTION_ENABLED=no\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SPARK_SSL_ENABLED=no\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ~/docker/spark/share"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/opt/share\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8082:8081'")]),t._v("\n")])])]),a("ul",[a("li",[t._v("在工作目录中执行docker命令启动集群，显示一下代码，则执行成功")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" \n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Building "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(".0s "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("/0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     docker:desktop-linux                                                          \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Running "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("/4\n ✔ Network spark_default             Created                                                           \n ✔ Container spark-spark-1           Started  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(".2s                                                      \n ✔ Container spark-spark-worker-1-1  Started  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(".2s                                                           \n ✔ Container spark-spark-worker-2-1  Started  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(".2s \n")])])]),a("blockquote",[a("ul",[a("li",[t._v("通过命令 http://localhost:8080/ 可查看集群的状态")])])]),t._v(" "),a("h2",{attrs:{id:"spark基础配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spark基础配置"}},[t._v("#")]),t._v(" Spark基础配置")]),t._v(" "),a("h3",{attrs:{id:"spark端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spark端口"}},[t._v("#")]),t._v(" Spark端口")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("端口")]),t._v(" "),a("th",[t._v("作用")]),t._v(" "),a("th",[t._v("修改方式")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("8080")]),t._v(" "),a("td",[t._v("Master节点的web端口")]),t._v(" "),a("td",[t._v("配置方式在spark-env.sh加一行"),a("br"),t._v("export SPARK_MASTER_WEBUI_PORT=8080")])]),t._v(" "),a("tr",[a("td",[t._v("8081")]),t._v(" "),a("td",[t._v("work节点的web端口是8081")]),t._v(" "),a("td",[t._v("配置方式在spark-env.sh加一行"),a("br"),t._v("export SPARK_WORKER_WEBUI_PORT=8081")])]),t._v(" "),a("tr",[a("td",[t._v("7077")]),t._v(" "),a("td",[t._v("Master通信端口是7077")]),t._v(" "),a("td",[t._v("配置方式在spark-env.sh加一行"),a("br"),t._v("export SPARK_MASTER_PORT=7077")])]),t._v(" "),a("tr",[a("td",[t._v("18080")]),t._v(" "),a("td",[t._v("Spark历史服务器端口是18080")]),t._v(" "),a("td",[t._v("配置方式在spark-defaults.conf加一行"),a("br"),t._v("spark.history.ui.port    18080")])]),t._v(" "),a("tr",[a("td",[t._v("6066")]),t._v(" "),a("td",[t._v("Spark外部服务端口是6066，这个端口有被黑客攻击的漏洞建议关闭")]),t._v(" "),a("td",[t._v("关闭方式在spark-defaults.conf加一行"),a("br"),t._v("spark.master.rest.enabled         false"),a("br"),t._v("修改方式:"),a("br"),t._v("spark.master.rest.port               16066")])])])]),t._v(" "),a("h2",{attrs:{id:"运行模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行模式"}},[t._v("#")]),t._v(" 运行模式")]),t._v(" "),a("blockquote",[a("p",[t._v("spark有四种不同的运行模式，分别为：local(本地模式)、Standalone、YARN、Mesos")])]),t._v(" "),a("h3",{attrs:{id:"local"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local"}},[t._v("#")]),t._v(" local")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("lcoa模式，就是在计算过程中不会使用集群中的计算资源，一台机器单打独斗，故一般用于教学，调试，演示等，")]),t._v(" "),a("li",[t._v("即：只需要一台机器，在服务器上部署Spark后，将任务提交到Spark上即可")])])]),t._v(" "),a("h3",{attrs:{id:"standalone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standalone"}},[t._v("#")]),t._v(" Standalone")]),t._v(" "),a("blockquote",[a("p",[t._v("Standalone模式，即采用Spark自带的集群模式运行，也就是独立的部署模式，Spark的独立部署模式也就是主从模式。即至少有两个节点，即master和worker节点")])]),t._v(" "),a("h4",{attrs:{id:"部署方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署方式"}},[t._v("#")]),t._v(" 部署方式")]),t._v(" "),a("ol",[a("li",[t._v("三台服务器，服务器信息如下：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("服务器域名")]),t._v(" "),a("th",[t._v("环境")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("node01，最为master节点")]),t._v(" "),a("td",[t._v("jdk8环境")])]),t._v(" "),a("tr",[a("td",[t._v("node02，作为worker节点")]),t._v(" "),a("td",[t._v("jdk8环境")])]),t._v(" "),a("tr",[a("td",[t._v("node03，作为worker节点")]),t._v(" "),a("td",[t._v("jdk8环境")])])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("三台服务器设置spark，也可只设置master，通过xsync或scp将spark配置后的文件夹分发到另外2台服务器")])]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("修改slaves,，添加服务器节点，配置文件位于 "),a("code",[t._v("conf/slaves.template")]),t._v("，slaves.template为示例，需要将"),a("code",[t._v(".template")]),t._v("去掉，其中，node01,node02,node03为节点服务器计算机名,即域名")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("node01\nnode02\nnode03\n")])])])]),t._v(" "),a("blockquote",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("修改"),a("code",[t._v("spark-env.sh")]),t._v("文件，添加"),a("code",[t._v("JAVA_HOME")]),t._v("以及集群对应的master节点名，同理，对应的文件名为："),a("code",[t._v("conf/spark-env.sh.template")])])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("JAVA_HMOE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/softwares/jdk1.8.0_202\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SPARK_MASTER_HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("node01\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SPARK_MASTER_PORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7077")]),t._v("\n")])])])]),t._v(" "),a("blockquote",[a("ol",{attrs:{start:"3"}},[a("li",[t._v("由于使用"),a("code",[t._v("start-all.sh")]),t._v("命令启动所有的服务器节点，原理是通过此脚本，会运行每个节点上的启动命令，因此，需要设置免密执行shell的操作，否则，每次启动都需要输入密码。start-all.sh源码如下：")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Licensed to the Apache Software Foundation (ASF) under one or more")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# contributor license agreements.  See the NOTICE file distributed with")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# this work for additional information regarding copyright ownership.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The ASF licenses this file to You under the Apache License, Version 2.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# (the "License"); you may not use this file except in compliance with')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the License.  You may obtain a copy of the License at")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    http://www.apache.org/licenses/LICENSE-2.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unless required by applicable law or agreed to in writing, software")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# distributed under the License is distributed on an "AS IS" BASIS,')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# See the License for the specific language governing permissions and")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# limitations under the License.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start all spark daemons.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Starts the master on this node.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Starts a worker on each node specified in conf/slaves")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-z")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SPARK_HOME}")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SPARK_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$0")]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v('"')]),t._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Load the Spark configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SPARK_HOME}")]),t._v('/sbin/spark-config.sh"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start Master")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SPARK_HOME}")]),t._v('/sbin"')]),t._v("/start-master.sh\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start Workers")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SPARK_HOME}")]),t._v('/sbin"')]),t._v("/start-slaves.sh\n")])])])]),t._v(" "),a("blockquote",[a("ol",{attrs:{start:"4"}},[a("li",[a("p",[t._v("启动集群，使用"),a("code",[t._v("sbin/start-all.sh")]),t._v("命令启动集群")])]),t._v(" "),a("li",[a("p",[t._v("设置"),a("RouterLink",{attrs:{to:"/blogs/运维/Linux.html#SSH免密登录"}},[t._v("ssh免密登录")]),t._v("，不然执行ssh时，需要使用密码登录")],1)]),t._v(" "),a("li",[a("p",[t._v("需要开发一下端口对应的防火墙，避免出现端口访问不到的问题。需要开放的端口。"),a("RouterLink",{attrs:{to:"/blogs/运维/Linux.html#防火墙"}},[t._v("防火墙设置")])],1)])]),t._v(" "),a("ul",[a("li",[t._v("8080(master的web UI监控端口)")]),t._v(" "),a("li",[t._v("8081(worker的Web UI监控端口)")]),t._v(" "),a("li",[t._v("7077(集群的节点通讯端口)")])]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("访问master节点的web界面，查看集群状态。即："),a("code",[t._v("http:xxxx:8080")])])])]),t._v(" "),a("blockquote",[a("ol",{attrs:{start:"7"}},[a("li",[t._v("提交任务到master上，则可以使用集群来做对应的计算")])])]),t._v(" "),a("h2",{attrs:{id:"基础概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[t._v("#")]),t._v(" 基础概念")]),t._v(" "),a("h3",{attrs:{id:"hdfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hdfs"}},[t._v("#")]),t._v(" HDFS")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("HDFS即 Hadoop Distributed File System，即Hadoop的分布式文件系统")])])]),t._v(" "),a("h3",{attrs:{id:"driver和executor进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#driver和executor进程"}},[t._v("#")]),t._v(" driver和executor进程")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("dirver: 负责任务调用，类似于 ApplicationMaster，负责将用户写的程序转换为一个job。")]),t._v(" "),a("li",[t._v("executor：负责执行spark中的具体任务")]),t._v(" "),a("li",[t._v("在Standalone和yarn模式中都会存在")])])]),t._v(" "),a("h3",{attrs:{id:"master和worker节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master和worker节点"}},[t._v("#")]),t._v(" master和worker节点")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("搭建spark集群时，会有2种不同的节点，即master和worker节点，master节点负责向worker节点提交任务和管理worker节点，worker节点和master节点进行通讯，并管理excutor进程")]),t._v(" "),a("li",[t._v("master和worker只有standalone模式才会有")])])]),t._v(" "),a("h2",{attrs:{id:"快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),a("h3",{attrs:{id:"连接spark"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接spark"}},[t._v("#")]),t._v(" 连接Spark")]),t._v(" "),a("blockquote",[a("p",[t._v("连接Spark后，可使用Spark提供的一系列接口来做数据分析和计算")])]),t._v(" "),a("h4",{attrs:{id:"spark依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spark依赖"}},[t._v("#")]),t._v(" Spark依赖")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.spark"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spark-core_2.13"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3.5.0"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h4",{attrs:{id:"sparkcontext类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sparkcontext类"}},[t._v("#")]),t._v(" SparkContext类")]),t._v(" "),a("blockquote",[a("p",[t._v("SparkContext表示Spark示例，通过创建SparkContext，相当于创建了一个连接Spark的连接，通过这个实例可实现调用Spark提供的数据计算和分析的接口，完成数据分析工作")])])])}),[],!1,null,null,null);a.default=n.exports}}]);