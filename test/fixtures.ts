export const exampleComHtml = `
<!doctype html>
<html>
<head>
    <title>Example Domain</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
    body {
        background-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

    }
    div {
        width: 600px;
        margin: 5em auto;
        padding: 2em;
        background-color: #fdfdff;
        border-radius: 0.5em;
        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
    }
    a:link, a:visited {
        color: #38488f;
        text-decoration: none;
    }
    @media (max-width: 700px) {
        div {
            margin: 0 auto;
            width: auto;
        }
    }
    </style>
</head>

<body>
<div>
    <h1>Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.</p>
    <p><a href="https://www.iana.org/diddy-domains/example">More information...</a></p>
</div>
</body>
</html>
`;

export const rawEmail = `Delivered-To: max@block65.com
Received: by 2002:a50:9b43:0:b0:58b:447c:4fd9 with SMTP id a3csp93427edj;
        Fri, 9 Aug 2024 18:30:48 -0700 (PDT)
X-Google-Smtp-Source: AGHT+IGcjmMhcoKcSIB8T+EdJyFu7ESGkZxKRRUIBWe1Eey07jwrE8AtLuGGOqPY3mKj1Ml2HDOi
X-Received: by 2002:a05:620a:1a13:b0:79f:15ca:b786 with SMTP id af79cd13be357-7a4c17b6b70mr349942385a.16.1723253448240;
        Fri, 09 Aug 2024 18:30:48 -0700 (PDT)
ARC-Seal: i=1; a=rsa-sha256; t=1723253448; cv=none;
        d=google.com; s=arc-20160816;
        b=KvlY1qyPqbDwYi+GKjsO825K0lVUcJ3iJzR3i9J+AZNlJ7VpjAJgTH3XesadA4eHIs
         l2AOwROmgjbIP/cCpbCymENEMVduYxnT4+oOWBVHmNTi63qHK+BcFQ6T4XSkZMmTKlkJ
         dA99RPWbAwAhkwIfmGvLmp2f0BixWnAq6fELe3YQHWDEa1CkrkmG0fVmlCvMsUXKdoTO
         sF1FT5g1SxoTQ3aiqOdyvSTaxaZ/IZ5CZtOEOonum7EW7mFFu2Acim/A2gyacU0AtoXq
         vFVwLFxhGR7EM3bcFRylt2vhVvP9RS3JpZ7W6sgXj1VaKGG2FnC75FC8uqp52DGmb+81
         iZMg==
ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;
        h=to:subject:message-id:mime-version:from:date:dkim-signature;
        bh=v8PYjlwlESPYRZMWidIw5ywcMUG7MmRCLopL3+G1+h0=;
        fh=nQJQ18qJLQIxFnyCVF+w8kft+Ky0wpx5xBeV+7aDNqo=;
        b=R0m+uXjfo1ZJdRfi46W/vZ8OkLMEOePvun0R8DaSthObEVUxvG6xYC7xf4Ro4EHh1L
         KtoaaXq4/gWv+9e81oDSPtCjOEWGpGrDtHeCNCyrX0zDT9+dpOVSo/bxbV9DF0nrpOKk
         39t6BrcM+mHwZ50aZd0bH2/xPR4/EcVfrSIJGCemJsd3R5v0JDnGW3geT6/rlpSsr0Jr
         T0fdJXmMhlxoh4GAexYQg1FxRrXIflqcBUGCoDTaSqKAddB0rRgdtYFTj+QPlxMfRBkg
         z6KyrDfX3qqlGMJFi8hVxN1JmA0IRiboCftWHTotbmrOnQPDTyItsK61lWW5qxCrOPLR
         pS3A==;
        dara=google.com
ARC-Authentication-Results: i=1; mx.google.com;
       dkim=pass header.i=@colacube-email.com header.s=s1 header.b=oMj8HMbg;
       spf=pass (google.com: domain of bounces+12264310-bad5-max=block65.com@bounce.colacube-email.com designates 159.183.224.104 as permitted sender) smtp.mailfrom="bounces+12264310-bad5-max=block65.com@bounce.colacube-email.com";
       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=colacube-email.com
Return-Path: <bounces+12264310-bad5-max=block65.com@bounce.colacube-email.com>
Received: from s.wfbtzhsv.outbound-mail.sendgrid.net (s.wfbtzhsv.outbound-mail.sendgrid.net. [159.183.224.104])
        by mx.google.com with ESMTPS id af79cd13be357-7a4c7df8941si80469185a.232.2024.08.09.18.30.47
        for <max@block65.com>
        (version=TLS1_3 cipher=TLS_AES_128_GCM_SHA256 bits=128/128);
        Fri, 09 Aug 2024 18:30:48 -0700 (PDT)
Received-SPF: pass (google.com: domain of bounces+12264310-bad5-max=block65.com@bounce.colacube-email.com designates 159.183.224.104 as permitted sender) client-ip=159.183.224.104;
Authentication-Results: mx.google.com;
       dkim=pass header.i=@colacube-email.com header.s=s1 header.b=oMj8HMbg;
       spf=pass (google.com: domain of bounces+12264310-bad5-max=block65.com@bounce.colacube-email.com designates 159.183.224.104 as permitted sender) smtp.mailfrom="bounces+12264310-bad5-max=block65.com@bounce.colacube-email.com";
       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=colacube-email.com
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=colacube-email.com; h=content-type:from:mime-version:subject:to:cc:content-type:from: subject:to; s=s1; bh=v8PYjlwlESPYRZMWidIw5ywcMUG7MmRCLopL3+G1+h0=; b=oMj8HMbgTuWg1euybh6oeFKsO/jD3HNun70DYPwawUb+mrN/1Rm+PobjUWPhnoe/IpcJ /AGK7KrwDHCHIGV7wT0Ixjaz5MRyWkmy/zbUmXHAaZQbchuvDUQbOI7pI8/uxCNEpH7kIP nhTrKe3RKTSe3YdHP1YXySN3wnfieFPZe09VcIbKnqY7fiJW1OWitoJ2kKhcWNGA4+kMHu Fch+U3ZI8DLjlhEPBvd5X6AkJ5yppDmxRVPffBGMlvlLAHaWNfja8po9kyHuKXiK3GB1wx WpNTF6dhOSMDvA4D0WsAoTstyUY2SoJM2EIU6yFlVgHvWf9zQJM8CQf3d3Rz7b6w==
Received: by recvd-6c995f564b-m8qlv with SMTP id recvd-6c995f564b-m8qlv-1-66B6C2C5-15 2024-08-10 01:30:45.983845198 +0000 UTC m=+965481.441797459
Received: from MTIyNjQzMTA (unknown) by geopod-ismtpd-8 (SG) with HTTP id N2XLWyA2QXqpJvrOZTXzNQ Sat, 10 Aug 2024 01:30:45.643 +0000 (UTC)
Content-Type: multipart/alternative; boundary=324b85cd9b8b37723896d3a0dac3e8dfc9a5b3bcbfb393f925cbebf40af3
Date: Sat, 10 Aug 2024 01:30:46 +0000 (UTC)
From: Colacube <notifications@colacube-email.com>
Mime-Version: 1.0
Message-ID: <N2XLWyA2QXqpJvrOZTXzNQ@geopod-ismtpd-8>
Subject: 👑 Block65 Activity Digest
X-SG-EID: u001.z8ujrH/TiUd/j88jk0IDyncgjSPrpDpI1FN4afTL1uKIJzIbA2ZKXFmztjAbqY64gVlfwFyaf95WteicDUzbpdeFaNupVQxuJ9Py33w8RMi4C1ZfBcogi7nXKdbEPIJRWDuKosws1VXbHbT19WSVQB0mw2tZfLqWTqM7wrDcW0H2AcdbkFNcjErW2WG3qA7XEBCPstsmqMtLwRgczcqoxjMfhdIxhqIVOGteyEa7IYts4cP/GuyaZEyfZUY277gO
X-SG-ID: u001.SdBcvi+Evd/bQef8eZF3BpTL9BgbK5wfSJMJGMsmprA5SrCZSMNTIsNXrXiAfAngM9mVqvhAQn8wBbrfzfqvOos0eEKfNlyl4043JceFo1I6yq+TjI/TufyFqXm8Iaeh3Jry4+MUwvi3PYk1/U3tfQNU2yIoETizvLlJ8q9ELFM=
To: max@block65.com
X-Entity-ID: u001.vuIvj4ai8gBjvx5MwQ6pYA==

--324b85cd9b8b37723896d3a0dac3e8dfc9a5b3bcbfb393f925cbebf40af3
Content-Transfer-Encoding: quoted-printable
Content-Type: text/plain; charset=utf-8
Mime-Version: 1.0

=F0=9F=91=91 BLOCK65
Fri, Aug 9, 1:30 AM =E2=80=93 Sat, Aug 10, 1:30 AM (Etc/UTC)
https://dash.colacube.io/accounts/block65/sites/qzXnqyJHri/pages?s=3Dsort%3=
Achange-created-desc
hugedomains.com
3 pages changed (~11%)
[https://dash.colacube.io/accounts/block65/sites/qzXnqyJHri/pages?s=3Dsort%=
3Achange-created-desc]
This message was sent to max@block65.com
You can turn off
[https://dash.colacube.io/accounts/block65/settings/groups/lcLyOytoI0/integ=
rations/vwZCyO3wbe]
these emails at any time
=C2=A9 2024 Colacube. All Rights Reserved. www.colacube.io
50 Somme Road, #01-01, Singapore 207871
--324b85cd9b8b37723896d3a0dac3e8dfc9a5b3bcbfb393f925cbebf40af3
Content-Transfer-Encoding: quoted-printable
Content-Type: text/html; charset=utf-8
Mime-Version: 1.0

<!doctype html>
<html xmlns=3D"http://www.w3.org/1999/xhtml" xmlns:v=3D"urn:schemas-microso=
ft-com:vml" xmlns:o=3D"urn:schemas-microsoft-com:office:office">
  <head>
    <title>
      =F0=9F=91=91 Block65 Activity Digest
    </title>
    <!--[if !mso]><!-->
    <meta http-equiv=3D"X-UA-Compatible" content=3D"IE=3Dedge">
    <!--<![endif]-->
    <meta http-equiv=3D"Content-Type" content=3D"text/html; charset=3DUTF-8=
">
    <meta name=3D"viewport" content=3D"width=3Ddevice-width, initial-scale=
=3D1">
    <style type=3D"text/css">
      #outlook a { padding:0; }
      body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size=
-adjust:100%; }
      table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-r=
space:0pt; }
      img { border:0;height:auto;line-height:100%; outline:none;text-decora=
tion:none;-ms-interpolation-mode:bicubic; }
      p { display:block;margin:13px 0; }
    </style>
    <!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]-->
    <!--[if lte mso 11]>
    <style type=3D"text/css">
      .mj-outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->
   =20
   =20
    <style type=3D"text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
.mj-column-per-50 { width:50% !important; max-width: 50%; }
      }
    </style>
    <style media=3D"screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 { width:100% !important; max-width:=
 100%; }
.moz-text-html .mj-column-per-50 { width:50% !important; max-width: 50%; }
    </style>
   =20
 =20
    <style type=3D"text/css">
   =20
   =20

    @media only screen and (max-width:480px) {
      table.mj-full-width-mobile { width: 100% !important; }
      td.mj-full-width-mobile { width: auto !important; }
    }
 =20
    </style>
    <style type=3D"text/css">
    h1, h2 {
            font-weight: normal;
          }

          h1, h2, h3, h4 {
            margin-top: 0;
          }

          a, a:visited {
            text-decoration: none;
            color: #3e61e3;
            font-weight: bold;
          }

          code {
            background-color: #eee;
            padding: 3px;
          }

          body {
            padding-bottom: 25px;
          }

          bdi {
            word-break: break-all;
            /*text-overflow: ellipsis;*/
            /*overflow: hidden;*/
            /*white-space: nowrap;*/
          }
    </style>
    <script type=3D"application/ld+json">{"@context":"https://schema.org","=
@type":"Organization","logo":"https://storage.googleapis.com/c3-prod/colacu=
be.io/prod-one-device.png"}</script>
  </head>
  <body style=3D"word-spacing:normal;background-color:#f8f8f8;">
   =20
    <div style=3D"display:none;font-size:1px;color:#ffffff;line-height:1px;=
max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
      Changes detected on 1 site.
    </div>
 =20
   =20
      <div
         class=3D"main" style=3D"background-color:#f8f8f8;"
      >
       =20
     =20
      <!--[if mso | IE]><table align=3D"center" border=3D"0" cellpadding=3D=
"0" cellspacing=3D"0" class=3D"" role=3D"presentation" style=3D"width:600px=
;" width=3D"600" ><tr><td style=3D"line-height:0px;font-size:0px;mso-line-h=
eight-rule:exactly;"><![endif]-->
   =20
     =20
      <div  style=3D"margin:0px auto;max-width:600px;">
       =20
        <table
           align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0=
" role=3D"presentation" style=3D"width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style=3D"direction:ltr;font-size:0px;padding:25px;text-ali=
gn:center;"
              >
                <!--[if mso | IE]><table role=3D"presentation" border=3D"0"=
 cellpadding=3D"0" cellspacing=3D"0"><tr><td class=3D"" style=3D"vertical-a=
lign:top;width:550px;" ><![endif]-->
           =20
      <div
         class=3D"mj-column-per-100 mj-outlook-group-fix" style=3D"font-siz=
e:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top=
;width:100%;"
      >
       =20
      <table
         border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentat=
ion" style=3D"vertical-align:top;" width=3D"100%"
      >
        <tbody>
         =20
              <tr>
                <td
                   align=3D"center" style=3D"font-size:0px;padding:0;word-b=
reak:break-word;"
                >
                 =20
      <table
         border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentat=
ion" style=3D"border-collapse:collapse;border-spacing:0px;"
      >
        <tbody>
          <tr>
            <td  style=3D"width:200px;">
             =20
      <img
         alt=3D"Colacube" height=3D"auto" src=3D"https://storage.googleapis=
.com/c3-prod/colacube.io/wordmark.png" style=3D"border:0;display:block;outl=
ine:none;text-decoration:none;height:auto;width:100%;font-size:18px;" width=
=3D"200"
      />
   =20
            </td>
          </tr>
        </tbody>
      </table>
   =20
                </td>
              </tr>
           =20
        </tbody>
      </table>
   =20
      </div>
   =20
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
       =20
      </div>
   =20
     =20
      <!--[if mso | IE]></td></tr></table><table align=3D"center" border=3D=
"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"" role=3D"presentation" st=
yle=3D"width:600px;" width=3D"600" bgcolor=3D"#ffffff" ><tr><td style=3D"li=
ne-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
   =20
     =20
      <div  style=3D"background:#ffffff;background-color:#ffffff;margin:0px=
 auto;max-width:600px;">
       =20
        <table
           align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0=
" role=3D"presentation" style=3D"background:#ffffff;background-color:#fffff=
f;width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style=3D"border-bottom:2px solid #ddd;border-top:1px solid=
 #eee;direction:ltr;font-size:0px;padding:25px;text-align:center;"
              >
                <!--[if mso | IE]><table role=3D"presentation" border=3D"0"=
 cellpadding=3D"0" cellspacing=3D"0"><tr><td class=3D"" width=3D"600px" ><t=
able align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" clas=
s=3D"" role=3D"presentation" style=3D"width:550px;" width=3D"550" ><tr><td =
style=3D"line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![en=
dif]-->
   =20
     =20
      <div  style=3D"margin:0px auto;max-width:550px;">
       =20
        <table
           align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0=
" role=3D"presentation" style=3D"width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style=3D"direction:ltr;font-size:0px;padding:25px 25px 0;t=
ext-align:center;"
              >
                <!--[if mso | IE]><table role=3D"presentation" border=3D"0"=
 cellpadding=3D"0" cellspacing=3D"0"><tr><td class=3D"" style=3D"vertical-a=
lign:top;width:500px;" ><![endif]-->
           =20
      <div
         class=3D"mj-column-per-100 mj-outlook-group-fix" style=3D"font-siz=
e:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top=
;width:100%;"
      >
       =20
      <table
         border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentat=
ion" style=3D"vertical-align:top;" width=3D"100%"
      >
        <tbody>
         =20
              <tr>
                <td
                   align=3D"left" style=3D"font-size:0px;padding:0;word-bre=
ak:break-word;"
                >
                 =20
      <div
         style=3D"font-family:Helvetica, Arial, sans-serif;font-size:18px;l=
ine-height:25px;text-align:left;color:#444444;"
      ><h3><bdi dir=3D"auto"><span>=F0=9F=91=91 Block65</span></bdi></h3></=
div>
   =20
                </td>
              </tr>
           =20
              <tr>
                <td
                   align=3D"left" style=3D"font-size:0px;padding:0;word-bre=
ak:break-word;"
                >
                 =20
      <div
         style=3D"font-family:Helvetica, Arial, sans-serif;font-size:14px;l=
ine-height:25px;text-align:left;color:#444444;"
      >Fri, Aug 9, 1:30 AM =E2=80=93 Sat, Aug 10, 1:30 AM (Etc/UTC)</div>
   =20
                </td>
              </tr>
           =20
        </tbody>
      </table>
   =20
      </div>
   =20
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
       =20
      </div>
   =20
     =20
      <!--[if mso | IE]></td></tr></table></td></tr><tr><td class=3D"" widt=
h=3D"600px" ><table align=3D"center" border=3D"0" cellpadding=3D"0" cellspa=
cing=3D"0" class=3D"" role=3D"presentation" style=3D"width:550px;" width=3D=
"550" ><tr><td style=3D"line-height:0px;font-size:0px;mso-line-height-rule:=
exactly;"><![endif]-->
   =20
     =20
      <div  style=3D"margin:0px auto;max-width:550px;">
       =20
        <table
           align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0=
" role=3D"presentation" style=3D"width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style=3D"direction:ltr;font-size:0px;padding:25px 25px 0;p=
adding-bottom:20px;text-align:center;"
              >
                <!--[if mso | IE]><table role=3D"presentation" border=3D"0"=
 cellpadding=3D"0" cellspacing=3D"0"><tr><td class=3D"" style=3D"vertical-a=
lign:top;width:250px;" ><![endif]-->
           =20
      <div
         class=3D"mj-column-per-50 mj-outlook-group-fix" style=3D"font-size=
:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;=
width:100%;"
      >
       =20
      <table
         border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentat=
ion" style=3D"vertical-align:top;" width=3D"100%"
      >
        <tbody>
         =20
              <tr>
                <td
                   align=3D"left" style=3D"font-size:0px;padding:0;padding-=
right:20px;word-break:break-word;"
                >
                 =20
      <table
         border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentat=
ion" style=3D"border-collapse:collapse;border-spacing:0px;" class=3D"mj-ful=
l-width-mobile"
      >
        <tbody>
          <tr>
            <td  style=3D"width:228px;" class=3D"mj-full-width-mobile">
             =20
        <a
           href=3D"https://click.colacube-email.com/ls/click?upn=3Du001.EIa=
9C3UNyYDIFX-2F8xTmS4awXlzUyPOnMOvk-2BPu8-2FOlZ2Ier1PPMCGukLsgqEikJhwu3lBpLx=
dl4Mq5eSL5DgPA52vZkWr6Jb5YysbrdEHNv-2B8G6lS8oepGKmJXJiSyyX50rN1eAPg3nOeG-2B=
By9wHyw-3D-3DjLR1_uyZSC8N9yqa0mahyIterIo-2Fft86KVXjgqAxMf1VVa934jdR8Q-2Bfnw=
cmiLkJZpwzvqLY3StfcW3scDieIq2rTPpgBjxTGsv8cBIZqHO-2BD9iMSWMlI8U6P8xEu8jKo8M=
XnyHETB94W-2FUE0otds-2BJuiRBmjNJz1T854IRifoKGKF6f9S1lmYNcW2hzk3xXMorejkplG6=
06MSf-2FXtpqlCpj1JmFBCUWe-2FRODfzW-2BwydnwrFG33D-2FNjK7A9f0mH14TAKyT3LlgzkT=
oFKDTw26QGa1qiIMQb4pgK4UVX71G3sRhTNirPntFmlr-2BC00LTF5-2F8ngnyOvm7G8WO3BlaU=
eTp-2Fyfw-3D-3D" target=3D"_blank"
        >
         =20
      <img
         height=3D"auto" src=3D"https://snapshot-thumbs.colacube.io/us-east=
/block65/qzXnqyJHri/qzXnresJyM/FvcR33pc5q1EqP7itgqrWM?x-cola-claims=3DeyJle=
HAiOjE3MjM1MDcyMDAsImtpZCI6IjEifQ&amp;x-cola-sig=3DZLNNVhUVfUTprTPOQlyRJXc5=
Zjz6PWC9Uh__fzbwRgQ" style=3D"border:1px solid #eee;display:block;outline:n=
one;text-decoration:none;height:auto;width:100%;font-size:18px;" width=3D"2=
28"
      />
   =20
        </a>
     =20
            </td>
          </tr>
        </tbody>
      </table>
   =20
                </td>
              </tr>
           =20
        </tbody>
      </table>
   =20
      </div>
   =20
          <!--[if mso | IE]></td><td class=3D"" style=3D"vertical-align:top=
;width:250px;" ><![endif]-->
           =20
      <div
         class=3D"mj-column-per-50 mj-outlook-group-fix" style=3D"font-size=
:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;=
width:100%;"
      >
       =20
      <table
         border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentat=
ion" style=3D"vertical-align:top;" width=3D"100%"
      >
        <tbody>
         =20
              <tr>
                <td
                   align=3D"left" style=3D"font-size:0px;padding:0;word-bre=
ak:break-word;"
                >
                 =20
      <div
         style=3D"font-family:Helvetica, Arial, sans-serif;font-size:18px;f=
ont-weight:700;line-height:32px;text-align:left;color:#444444;"
      ><bdi dir=3D"auto"><span>hugedomains</span>.<span>com</span></bdi></d=
iv>
   =20
                </td>
              </tr>
           =20
              <tr>
                <td
                   align=3D"left" style=3D"font-size:0px;padding:0;word-bre=
ak:break-word;"
                >
                 =20
      <div
         style=3D"font-family:Helvetica, Arial, sans-serif;font-size:14px;l=
ine-height:36px;text-align:left;color:#444444;"
      ><span><a rel=3D"ugc nofollow noopener noreferrer" href=3D"https://cl=
ick.colacube-email.com/ls/click?upn=3Du001.EIa9C3UNyYDIFX-2F8xTmS4awXlzUyPO=
nMOvk-2BPu8-2FOlZ2Ier1PPMCGukLsgqEikJhwu3lBpLxdl4Mq5eSL5DgPA52vZkWr6Jb5Yysb=
rdEHNv-2B8G6lS8oepGKmJXJiSyyX50rN1eAPg3nOeG-2BBy9wHyw-3D-3D58Ld_uyZSC8N9yqa=
0mahyIterIo-2Fft86KVXjgqAxMf1VVa934jdR8Q-2BfnwcmiLkJZpwzvqLY3StfcW3scDieIq2=
rTPpgBjxTGsv8cBIZqHO-2BD9iMSWMlI8U6P8xEu8jKo8MXnyHETB94W-2FUE0otds-2BJuiRBm=
jNJz1T854IRifoKGKF6f9S1lmYNcW2hzk3xXMorejW-2FaSdUXo7mf-2BquXPReLpeZtDBO9zno=
WfoEHCO39H6Zpjhmoe08xBj-2FQHy-2FIWyQhhvXQenuSiULwGBjgbPivdSFtbjcDPZH3t2vZrO=
DowDUiCDZyc-2Ba0dyUGfBqwAlSzyK0wWTYiFOWqCTNcq0kCdqg-3D-3D" target=3D"_blank=
">3 pages changed (~11%)</a></span></div>
   =20
                </td>
              </tr>
           =20
        </tbody>
      </table>
   =20
      </div>
   =20
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
       =20
      </div>
   =20
     =20
      <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
       =20
      </div>
   =20
     =20
      <!--[if mso | IE]></td></tr></table><table align=3D"center" border=3D=
"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"" role=3D"presentation" st=
yle=3D"width:600px;" width=3D"600" ><tr><td style=3D"line-height:0px;font-s=
ize:0px;mso-line-height-rule:exactly;"><![endif]-->
   =20
     =20
      <div  style=3D"margin:0px auto;max-width:600px;">
       =20
        <table
           align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0=
" role=3D"presentation" style=3D"width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style=3D"direction:ltr;font-size:0px;padding:25px 25px 0;t=
ext-align:center;"
              >
                <!--[if mso | IE]><table role=3D"presentation" border=3D"0"=
 cellpadding=3D"0" cellspacing=3D"0"><tr><td class=3D"" style=3D"vertical-a=
lign:top;width:550px;" ><![endif]-->
           =20
      <div
         class=3D"mj-column-per-100 mj-outlook-group-fix" style=3D"font-siz=
e:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top=
;width:100%;"
      >
       =20
      <table
         border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentat=
ion" style=3D"vertical-align:top;" width=3D"100%"
      >
        <tbody>
         =20
              <tr>
                <td
                   align=3D"center" style=3D"font-size:0px;padding:10px;wor=
d-break:break-word;"
                >
                 =20
      <div
         style=3D"font-family:Helvetica, Arial, sans-serif;font-size:14px;l=
ine-height:25px;text-align:center;color:#444444;"
      ><p>This message was sent to <bdi dir=3D"auto"><span>max@block65</spa=
n>.<span>com</span></bdi></p><p>You can <a rel=3D"ugc nofollow noopener nor=
eferrer" href=3D"https://click.colacube-email.com/ls/click?upn=3Du001.EIa9C=
3UNyYDIFX-2F8xTmS4awXlzUyPOnMOvk-2BPu8-2FOlZ2Ier1PPMCGukLsgqEikJhTNHrHWSv6I=
xT0aIc3YXCNbLKTt-2FelWgPxcMFZTZes5sJgI68Qt9ddj0vzL1uidffBybKEAd4la9kWL8ENIY=
dmQ-3D-3DjDRj_uyZSC8N9yqa0mahyIterIo-2Fft86KVXjgqAxMf1VVa934jdR8Q-2BfnwcmiL=
kJZpwzvqLY3StfcW3scDieIq2rTPpgBjxTGsv8cBIZqHO-2BD9iMSWMlI8U6P8xEu8jKo8MXnyH=
ETB94W-2FUE0otds-2BJuiRBmjNJz1T854IRifoKGKF6f9S1lmYNcW2hzk3xXMorej50aj6yxyj=
gvhAUAT24pD5ZF2IYMudOOjoPnaB3xiQAIWBXzJ59RUWXA6tiqleOyYxnTO99qEYi7Yu5YZZEzG=
CQ685V-2FgQcecMc1X-2F-2BZXYagGoaH198ixjEczWer-2BSPwgII6pCKyvQw9srlf0vnxVDg-=
3D-3D" target=3D"_blank">turn off</a> these emails at any time</p></div>
   =20
                </td>
              </tr>
           =20
              <tr>
                <td
                   align=3D"center" style=3D"font-size:0px;padding:0;word-b=
reak:break-word;"
                >
                 =20
      <div
         style=3D"font-family:Helvetica, Arial, sans-serif;font-size:12px;l=
ine-height:25px;text-align:center;color:#888888;"
      ><p>=C2=A9 2024 Colacube. All Rights Reserved. <span>www</span>.<span=
>colacube</span>.<span>io</span> <br/>50 Somme Road, #01-01, Singapore 2078=
71</p></div>
   =20
                </td>
              </tr>
           =20
        </tbody>
      </table>
   =20
      </div>
   =20
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
       =20
      </div>
   =20
     =20
      <!--[if mso | IE]></td></tr></table><![endif]-->
   =20
   =20
      </div>
   =20
  <img src=3D"https://click.colacube-email.com/wf/open?upn=3Du001.FVrKTTL2l=
iumtJZyR17E2D5sGEFta4JCVinLhZ-2F0ql9Awpbey3ZL-2F-2BOUYXW-2BVf2d4gwX5pOY-2Br=
r-2Fdn5iCB5OMCushkYyCbT71eCP9QrtTroLkd6HsAq3i3vbf6oASZSYA7aFNhRAaJFVK1Wb6MO=
uxA4erFR6AeyR981SjWK5h4E0c5CPHC850KegpycbHoUYZ6RNqoexedGh195XFcYZL1yfVfpJiW=
9oP47XOoBdjhEl1wsFX2IymurzKgjgfE3SZtWvMf-2FeiFORrxwAImr-2B48CCvVlkuLBLMdSlT=
4V4D1Xk2EQHqgVRmZtjM-2B-2BMfUoqz66W9AxFugb4Z0qfncOYhg-3D-3D" alt=3D"" width=
=3D"1" height=3D"1" border=3D"0" style=3D"height:1px !important;width:1px !=
important;border-width:0 !important;margin-top:0 !important;margin-bottom:0=
 !important;margin-right:0 !important;margin-left:0 !important;padding-top:=
0 !important;padding-bottom:0 !important;padding-right:0 !important;padding=
-left:0 !important;"/></body>
</html>
 =20
--324b85cd9b8b37723896d3a0dac3e8dfc9a5b3bcbfb393f925cbebf40af3--`;
