(this["webpackJsonpmarta-app"]=this["webpackJsonpmarta-app"]||[]).push([[0],{10:function(e,t,A){},11:function(e){e.exports=JSON.parse('[{"id":1,"name":"Carla","type":"input"},{"id":2,"name":"Modep","type":"input"},{"id":3,"name":"Ardour","type":"input"},{"id":4,"name":"bitwig","type":"input"},{"id":5,"name":"PureData","type":"input"},{"id":6,"name":"SonicPi","type":"input"},{"id":7,"name":"SuperCollider","type":"input"},{"id":8,"name":"Lego","type":"input"},{"id":9,"name":"LMMS","type":"input"},{"id":10,"name":"HardwareOut","type":"output"},{"id":11,"name":"PureData_out","type":"output"},{"id":12,"name":"Carla_out","type":"output"}]')},16:function(e,t,A){},19:function(e,t,A){"use strict";A.r(t);var i=A(0),n=A.n(i),a=A(3),r=A.n(a),o=(A(10),A(16),A(8)),c=A(5),u=A(11),s=A(2),g=A(1);var d={buttonedge:function(e){var t=e.id,A=e.sourceX,i=e.sourceY,n=e.targetX,a=e.targetY,r=e.sourcePosition,o=e.targetPosition,u=e.style,d=void 0===u?{}:u,p=(e.data,e.arrowHeadType),m=e.markerEndId,J=Object(s.d)({sourceX:A,sourceY:i,sourcePosition:r,targetX:n,targetY:a,targetPosition:o}),k=Object(s.f)(p,m),b=Object(s.e)({sourceX:A,sourceY:i,targetX:n,targetY:a}),l=Object(c.a)(b,2),R=l[0],B=l[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("path",{id:t,style:d,className:"react-flow__edge-path",d:J,markerEnd:k}),Object(g.jsx)("foreignObject",{width:40,height:40,x:R-20,y:B-20,className:"edgebutton-foreignobject",requiredExtensions:"http://www.w3.org/1999/xhtml",children:Object(g.jsx)("body",{children:Object(g.jsx)("button",{className:"edgebutton",onClick:function(e){return function(e,t){e.stopPropagation();var A=document.getElementById(t);A.parentElement.remove(),A.remove()}(e,t)},children:"\xd7"})})})]})}},p=[],m=[];function J(){var e=Object(i.useState)(p),t=Object(c.a)(e,2),A=t[0],n=t[1];return Object(g.jsx)(s.c,{elements:A,snapToGrid:!0,onConnect:function(e){return n((function(t){return Object(s.b)(Object(o.a)(Object(o.a)({},e),{},{type:"buttonedge"}),t)}),function(e,t){return m.includes(e.toString()+t.toString())?console.log("already in database"):m.push(e.toString()+t.toString()),console.log(m)}(e.source,e.target))},onElementsRemove:function(e){return n((function(t){return Object(s.g)(e,t)}))},edgeTypes:d},"edge-with-button")}var k=function(){var e=u.map((function(e){"input"===e.type&&(p[e.id]={id:e.name,type:"input",data:{label:e.name},position:{x:100,y:60*e.id},animated:!0,sourcePosition:"right"}),"output"===e.type&&(p[e.id]={id:e.name,type:"output",data:{label:e.name},position:{x:600,y:50*e.id-200},animated:!0,targetPosition:"left"})}));return Object(g.jsxs)("div",{children:[e,Object(g.jsx)("div",{style:{height:800},children:Object(g.jsx)(J,{children:Object(g.jsx)(s.a,{color:"#FFFF",gap:16})})})]})};var b=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TJVIqDlYQ6ZChOlkQFXGUKhbBQmkrtOpgcukXNGlIUlwcBdeCgx+LVQcXZ10dXAVB8APEzc1J0UVK/F9TaBHjwXE/3t173L0DhEaFaVbPBKDptpmKx6RsblUSXxFAGCKGIMrMMhLpxQw8x9c9fHy9i/Is73N/jn41bzHAJxHPMcO0iTeIZzZtg/M+cYiVZJX4nHjcpAsSP3JdcfmNc7HFAs8MmZnUPHGIWCp2sdLFrGRqxNPEEVXTKV/Iuqxy3uKsVWqsfU/+wmBeX0lznWYYcSwhgSQkKKihjApsRGnVSbGQov2Yh3+k5U+SSyFXGYwcC6hCg9zyg//B726twtSkmxSMAb0vjvMxCoi7QLPuON/HjtM8AfzPwJXe8VcbwOwn6fWOFjkCBraBi+uOpuwBlzvA8JMhm3JL8tMUCgXg/Yy+KQcM3gKBNbe39j5OH4AMdbV8AxwcAmNFyl73eHdfd2//nmn39wNDmnKU7dzcngAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+UKHAcXF1k9x8MAAAolSURBVHja7d1rjFxlGcDx/3a6l3ZLS6+2hba0FVoEL0HUYEQRiQjGRD5ovBBNMNEYr2hMDDGaaDQGE2K8E+MXE40mmqioGMWIqICiBYRSW2jpvdCWAnvv7syOH95n0smmM3Nm287l7P+XnGzb2dmd95z3eS/P+55TkCRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkqTT6slhmeYDC+Poj6MXKER5C0AxjlJ8nQTGgBHgZA7OwSCwCBgA+qLM8+PoAabjKAJTwESUewwYNQC6y7w4ABYAm4AtwEXAWmA1sCxe64uvI8AQMBzHMeAp4AlgV/xbEShHRSl3+DWsnINeYBVwKfAyYD2wPILhPGBJBMN4VPxh4DhwBDgE7I7yH6wKkk4v/xm3lt3u1cAbgdcBFwNLq1r9SqtXaf0rlWU6Wv/pqj9PxjERFeBh4D7gb8BzHVz+C4Dr4hxcBqyM8vdV9XyVACnEe8pVwV2q6gmmIjiOAo8BD8Q52GMP0FkuA14PvCpa/I3AhdH1ny1HgL3A08BO4BHg38DhDij/euAq4JXAJVH+jRH8Z8tx4ECcgyeB/0RjcMQAaI/+quHNW4C3xsVvhVHgIeDPwF+jRTwSLWgrh3qrI/ivBq6P3q/Qot//AHA38M9oEPY5hW7dhe8DrgF+EkOUchuPvcCXgMurhlatCP7Lga9G8LWz/AeAO2K4OWD1PPdeAXw/Kt5Ymy9+OcbMQ8D/gNtjOHIurQW+DmyPnqjY5vJPAy8CO4DPAxu6uXIVOvizDQI3AZ8EbgTWxKSuE4aN/cAKYDOwNTJL+6N3OpsJiuuBW4F3AC+N8s/rsPJviKDYZRbo7FkH3ADcHOPd2ai0VKPRc0xxKvddyQz1ktYLBkkpwmaHM6uBd1VNQO86SxmTC4E3AR+Iuc5sTJDSvaOR2SlV9R7zI5AGovyL4mhWJfmwPs7lvcDzToLPbLy/FLgNuAU4v8kKPxUXeSKGTE/EmPVADFsqiz0L4+IviYu3gZQ7X8+p9OH8JlvbUeCnwFdiglyc5Tm4IMr+CVJKM6sSp1KZI1H2PTFZPRLnZDjO02C04quiAm+MOcby+Pf5s+htjwKfBX4LvGAAzH68+83I8ixr8r37gT9FpuYR0uJWqeqYrhrHVq8JFOLoixb9SlJe/Zr4ezNGgAeBT8eYvVlbgI9EACxp8r3bgHsiS/VEBORUVfmrx/HzqobAhaoKv4m0nnIdcG2Tk9wyKXX6LeA73RQEneJy4MfRhWadkBXjot8GvD1+xpIz/BwrSOsLN0Vrfn+Tk8Rx4HcxdGlmiHkF8G3g2SZ+1zHgF8DHotHYHPORM+mB10QQvDc+z44my78vJu1LrdLZXRqptekmKtl/gTujop53jj7XSuD9EZi7okXNWhF+Dbwt4+9ZH5XtWMafPUzKy3+NtAJ8rnryS4CPA7+KHjZr2Z+Jyfsqq3ZjS6PbHG+i8t8TFbNVGZFB4KOkRaBm1iHuJqVx6/UEq0jrCllb/qNRIa9q4RB2DWkNYlcTjdRQXKPFVvHaClH5DzdxUr8YY+VWz1/mRWW+g+zrERMxL7mgxs9cCLwzxs5Zft524DPRaLQyhd0Tn/Va4JdkXy/YF5ksncZ5wPtIuzCznNBHgQ+Tdnm20xbgUzHRzBq0PyTl8We6sYk5xl3Ae5rMDJ1tfcBrSQuAWXvsP0Q5NcPVpJ2GpQwn8V+RHenvkIzZ4khTbstYCUYjM1Sd2dpEWuHO0ov8MeYTfR1y7TZGpidLzz1GSg+vIZ/3n8zKpsgUZMny7CItNnXi8O3d0YMVMwbxzVXv/1yUrdG2i3uB19D+FeDTzYu+G3OSRmU/FA2AmaFwa2QKGp24g9HyDXZoORbF5zuQsSf4eaQqV0ernmXY8wY6d8vK0pgcT2Yoyx5SernjWrFWDyOuBD5I2spbz07gy1FRRjq0AkxGC3iCtCdoeYZ5z7pIL765QYv4e+AHwF+iJ+hElZuHJiJQG5V9KCbGJ+Zy1ucbGcaOz5By3Au6pFyLo1yNsjlF0grpkzEvqJU92R3Dvm7ZbvzymOyebFD+p2LYOGetIy1gNeouv0e6p7WbXAH8iDPfbnwE+EKG3qST9JNWoh/LUL7baW6PV26sJG1tfrZBC/kwaRtwN7oxWu/SLCt/MVrSbqwghei1G60Y/4OU/p5ztpI2ak00SJnd0sUtxErSGsH4LAPgftLWjm61mbRtpNFK/p1zMQBuiMlsrRNzEvg75/4Oq1ZUgm2z6AVKMTzo9tsMP0Tail6vrPeRdv62PbXbqg+whvQEg3rpzAOkNOHxLq8Ah0l74g81+b6HSFupJ7q8/A+SNgLWs4q0EDowVwJgK2kJvZ69wM+ii+xmk6Sb95u9M+w3pM123W47aTt4vSfsLSPd8bZgrgTABtJe/Vqe59RNLN3+FLISaQ1jJ9nz9yOkZw4dIh/2k7Zr1+rNzietB/XNlQBYF2PjWh6PIUCePBpB0MhJ0kOnDuSo7CdIu2CHa7zeS9rUuGwuBEDlgU7zGnSb23IYAI9l+L5R0mpvnm4hfJG0h2m4zvcs5tQ92LkNgJ6I9EaLOntJq6N5spv0WMVGxmP4N5yjsp+MXn2owfddRJtT3q3oAdZQ+66gSl74MPnzDNkeHzhJWh0fyVn5RyMRcLJO47iW2T2OpasCYHWDADhIlz1LpgnPRQWvZ4i0Op430zEZfr5OAKyeCwGwnNr5/3K0/iM5DYDRKN90nfIfzxAk3agnesGhOq+vIN1qmesAWEDthyxVHu0xltMAGKd+anc0AiCPd0pVru1InQBYSJsfd9mKSfBAg0JWHuCUR0VO3UB/OlM5Dv5KA1Dv2g7Q5sdztqIH6K9TyMoeoGKOA6De1obK/0yT1/+CaKJBAPTT5rvdWhEAhQa/p5TjClB5Xmm5zut5Df5KA1CqMzronQsBoLmtp8E8oWwASAaAZABIBoBkAEgGgGQASAaAZABIBoBkAEgGgGQASAaAZABIBoBkAEgGgGQASAaAZABIBoBkAEgGgGQAyADwFMgAkAwAyQCQDADJAJAMAMkAkAwAyQCQDADJAJAMAMkAkAwAyQCQDADJAJAMAMkAkAwAyQCQDADJAJAMAMkAkOZAAMwH+mq81htHT47Pb6WMp9MX54ecl7/Wa33tboRbcfLHgReBVcDkjN89DowCpZxWgCIwEuUfmFHOXuAFYCzHATAFDMefx2ZU/ilgKM5R2/S04OdfAqwDBoHpGSehBOwHnq46UXmyFLg4gr9wmvJPAIeBx4FyDsv/EmBzfC3OqBflaBh2AMfyGgCVlq5Qo6srRxAUZ1SOvA0B5tU415XyT+a0ByhET1+oUfZy9AR5HQFIkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkqTu8H8a5z2tgVfssAAAAABJRU5ErkJggg==",alt:"Logo",className:"photo"}),Object(g.jsx)("header",{className:"App-header"}),Object(g.jsx)(k,{})]})};r.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(b,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a316885a.chunk.js.map