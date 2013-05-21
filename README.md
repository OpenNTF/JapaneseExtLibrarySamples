XPages Extension Library サンプル NSF 日本語翻訳プロジェクト
============================================================

内容
----
このプロジェクトは 、XPages Extension Library Japan Project の一環として、 XPages Extension Library のモジュールに含まれているサンプルアプリケーションの翻訳
および OpenNTF.org で公開されている Demonstration Application for XPages の翻訳を行っています。

詳細については OpenNTF の [XPages Extension Library Japan Project のページ](http://www.openntf.org/internal/home.nsf/project.xsp?action=openDocument&name=XPages%20Extension%20Library%20Japan) をご覧ください。

現在翻訳を進めているアプリケーションは以下になります。

* XPages Extension Library Demo (XPagesExt.nsf)

  XPages Extension Library が提供している機能を試すことができます。

* XPages JDBC Demo (XPagesJDBC.nsf)

  XPages から JDBC によってリレーショナルデータベースにアクセスします。

* XPages Social Enabler Demo (XPagesSBT.nsf)

  XPages からクラウドサービスやソーシャルネットワークサービスにアクセスします。
  リリース時点では以下のサービスへの接続を確認しています。

  * IBM Sametime と IBM Connections (Lotus Greenhouse)
  * LotusLive (IBM SmarterCloud) ･･･ 利用にあたり組織管理者の権限が必要
  * Dropbox
  * Twitter
  * Generic Services (Stackoverflow と Redmine)
  * Utilities (User Bean, @Functions, JSON DataNavigator) 

  使用するにはいくつかの準備が必要です。
  1. このサンプルは Domino サーバーで使用します。Domino Designer のプリビューでは動作しません
  2. 動作には「OAuth Token Store」アプリケーション (WebSecurityStore.nsf) が必要です。
     このアプリケーションを作成するためのテンプレート (WebSecurityStore.ntf) は
     オリジナルの XPages Extension Library プロジェクト (http://extlib.openntf.org/) のリリースに含まれます。
  3. 接続対象のサービスでのユーザーアカウントが必要です。
     また OAuth による認証を行うサービスでは連携アプリケーションの登録が必要です。
  * IBM Sametime、IBM Connections  ･･･ Lotus Greenhouse のアカウント
  * Twitter ･･･ Twitter のアカウントと https://dev.twitter.com/apps でのアプリケーション登録
  * Dropbox ･･･ Dropbox のアカウントと https://www.dropbox.com/developers/apps でのアプリケーション登録

  参考文献


  * ビデオで見る XPages Extension Library のインストール方法
    http://bit.ly/TDUi1h
  * 
ビデオで見る XPages Social Enabler
    http://bit.ly/TDUgXg
  * XPages Social Enabler で Twitter と連携する方法
    http://bit.ly/TDUxcN

  * XPages Social Enabler で DropBox と連携する方法
    http://bit.ly/TDUwW8
  * XPages Extension Library の Social Enabler Sametime コントロールの使い方
    http://bit.ly/UcCygn
  * XPages Social Enabler で IBM Connections と連携する方法
    http://bit.ly/YulFjy
  * XPages: Social Tools cheatshee (英語) の「XPages: Social Tools」リンク先の文書に
    XPages Social Enabler の設定がまとめられています。(英語)
    http://xpagescheatsheet.com/cheatsheet.nsf

現在、ベースとしている XPages Extension Library モジュールのバージョンは、[853.20130215-1516](http://www.openntf.org/internal/home.nsf/release.xsp?documentId=AFE8FEF0ED29F85D86257B1E0031BCB7&action=openDocument) です。


Content
-------
This project aims to localize the following sample NSF applications in XPages Extension Library module as one of activities in XPages Extension Library Japan project. 
For more details, please see [XPages Extension Library Japan Project page](http://www.openntf.org/internal/home.nsf/project.xsp?action=openDocument&name=XPages%20Extension%20Library%20Japan) on OpenNTF.org.

* XPages Extension Library Demo (XPagesExt.nsf)

  You can try the functions of XPages Extension Library with this application.

* XPages JDBC Demo (XPagesJDBC.nsf)

  You can access a Relational Database via JDBC from this XPages application.

* XPages Social Enabler Demo (XPagesSBT.nsf)

  You can access Cloud Services and Social Network Services from this XPages application.
  Conductivities to the following services was verified on this release.

  * IBM Sametime and IBM Connections (Lotus Greenhouse)
  * LotusLive (IBM SmarterCloud) ... Administrator role for your organization is required.
  * Dropbox
  * Twitter
  * Generic Services (Stackoverflow and Redmine)
  * Utilities (User Bean, @Functions, JSON DataNavigator) 

  Some preparations are required to use this sample.
  1. This sample works on Domino server. Preview on Domino Designer would not work.
  2. "OAuth Token Store" application (WebSecurityStore.nsf) is required.
     The template (WebSecurityStore.ntf) for this application is included in
     the original XPages Extension Library project (http://extlib.openntf.org/) Release
  3. Accounts for the services the sample is connecting to are required. 
     And application registration on the services which require OAuth authoritarian are also required.
  * IBM Sametime、IBM Connections  ... Account on Lotus Greenhouse 
  * Twitter ･･･ Account on Twitter and application registration on https://dev.twitter.com/apps 
  * Dropbox ･･･ Account on Dropbox and application registration on https://www.dropbox.com/developers/apps

  Reference
  * XPages: Social Tools cheatshee
    Detail configuration for XPages Social Enabler are summarized in document liked with "XPages: Social Tools" link.
    http://xpagescheatsheet.com/cheatsheet.nsf

Currently, it is based on the version [853.20130215-1516](http://www.openntf.org/internal/home.nsf/release.xsp?documentId=AFE8FEF0ED29F85D86257B1E0031BCB7&action=openDocument) of XPages Extension Library module.



OPENNTF
-------
This project is an OpenNTF project, and is available under the Apache License V2.0.
All other aspects of the project, including contributions, defect reports, discussions,
feature requests and reviews are subject to the OpenNTF Terms of Use - available at
[http://openntf.org/Internal/home.nsf/dx/Terms_of_Use](http://openntf.org/Internal/home.nsf/dx/Terms_of_Use) .
