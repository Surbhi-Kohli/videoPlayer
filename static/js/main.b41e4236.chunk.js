(this["webpackJsonpttd-demo"]=this["webpackJsonpttd-demo"]||[]).push([[0],{33:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var n=s(4),a=s(3),i=s.n(a),r=s(15),c=s.n(r),A=(s(33),s(23)),d=s(18);d.a.initializeApp({apiKey:"AIzaSyAB_oF3A50erwT5cvkgSeoxvaFsqxprz1U",authDomain:"videoanalytics-414b3.firebaseapp.com",projectId:"videoanalytics-414b3",storageBucket:"videoanalytics-414b3.appspot.com",messagingSenderId:"63961094206",appId:"1:63961094206:web:fbb1bf1332ac1a8b32996f",measurementId:"G-PM2PFS4C9Z"}),d.a.analytics();var l=d.a,o=s(9),u=s.n(o),m=s.p+"static/media/dashboard2.4ac8149a.png",b=s(11),f=function(e){var t=Object(a.useRef)(),s=Object(a.useRef)(),i=Object(a.useState)("\u25ba"),r=Object(A.a)(i,2),c=r[0],d=r[1],o=Object(a.useState)(.1),f=Object(A.a)(o,2),g=f[0],p=f[1],j=Object(b.b)(),v=Object(b.c)((function(e){return e.data})),O=Object(b.c)((function(e){return e.rpm})),B=Object(b.c)((function(e){return e.mph}));Object(a.useEffect)((function(){return t.current.addEventListener("timeupdate",y),function(){t&&t.current&&t.current.removeEventListener("timeupdate",y)}}),[v,B,O]),Object(a.useEffect)((function(){l.firestore().collection("bunnyVideo").doc("UBgphJ8hmICKHb3gtl3Y").get().then((function(e){j({type:"add",val:e.data().FirstSlot})}))}),[]);var y=function(){var e=t.current.currentTime/t.current.duration*100;p(e);var s=t.current.currentTime/60;v.map((function(e){s<e.timeUpperLimit&&s>e.timeLowerLimit&&(j({type:"changeMph",val:e.mph}),j({type:"changeRpm",val:e.rpm}))})),100==e&&L()},h=function(){t.current.paused?(d("\u275a\u275a"),t.current.play()):(d("\u25ba"),t.current.pause())},L=function(){t.current.pause(),p(.5),d("\u25ba"),j({type:"changeMph",val:"0"}),j({type:"changeRpm",val:"0"})},x=function(e){t.current.currentTime+=parseFloat(e.currentTarget.dataset.skip)};return Object(n.jsxs)("div",{className:u.a.player,children:[Object(n.jsx)("video",{className:u.a.player__video,ref:t,onClick:h,src:e.src,type:"video/mp4"}),Object(n.jsxs)("div",{className:u.a.dynamicControls,children:[Object(n.jsxs)("div",{className:u.a.mph,children:[Object(n.jsx)("img",{src:m,style:{width:"65px",height:"65px"}}),Object(n.jsx)("span",{children:B})]}),Object(n.jsxs)("div",{className:u.a.mph,children:[Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAB1xSURBVHic7Z13mF5Fvcc/my1JyAZJuQIaAQEDBFCkiVKySC5F4YKCgqDXQhMUwQKiiIDgRbCigNiuCqGIghBBBJQao1KCgARMgGwIEpJIEkIghey+94/fee/OfGdOe0t2Q/b7PPMk7045c2bmzPz6wLqHNuAE4K/Ay0n6K/DJJG8Qr2GMBv4MVFLSVGBUv/VuEE3HH0if/Gr6fb/1bhBNxb6Ek/3PJOnfJ/VTH9c4Wvu7AznYBPgwcCjwLuyMnoNNUll8GXi78/sc4DDgYmwcJjp5q4EpNTxjCLZ4PgIcAGwNPA+8WENb6zSGAt8DXiX8Ov8ObFdDm91OG68Aw5284cnfqvndNbS/PfBwpL+vAt8FOmpoc51EC3Ad2ef0ImBCiTa3lPq3R8rcLmW2LNH+BGBxTp9/k7zbIHJwFPmEWgV4HOgs2OZxUvdLkTJfkjLHFWy7M+lLkT5/qGCb6zSm4Q/alcDuwNHA0kheEVwj9d4RKfMOKXNNwbavlHpLgU8kfda8ewu2uc5iCLCKvgGblfytioOAXsp9qS3AfKf8EuICn7Ykr1puPvlbtu4svUkf3fd50slfUaDNdRrt+AN6Z6TMN6XMcmCHjDa3l/JZ1P0UKbt9Rtkdkme75b8ZKXenlBnonFe/YwF9g/V0JL8dk9i5gzoTWD9SdiRwrpQ9OePZJ0vZc5M2FOsnz3TLTk36pnjaKbMg49mDSODSAKuJs0/jgIX4E3AtsBdwOnAjMFvyi3zVultU0+ykzdOTZ1wr+QuTPik6kneolpuW+/aD4Ar8wR2fUm5/oIf4hKWlvHNd6YUiqQcT+sQwXspekfHsfsGQ/CJrHE/K7zR+/A/AN0q2fSk2EWmoAD8s2eY3gFtS8raQ3/pu/Y6BqP4sugAAvoqJiLsieYuAGcATmLz/PuCeAs8/G7gD2BXYChPnTsA0iYq7gbMy2tK+Dy6AAnhKfutX5KIHOBz4GbA58CA2yVOxia8V9xAulq2BPZO0U9LPY7AzPg3ad3231xyGYZT0NODfwDPAr4G9S7QxFv/cvLnBfVyTuAn/XcaWqLs3Jj5+BiMypwInYXqSAYlNgcdIJ5ZuJPtrruI/gJVOvXq+ZEU7sDG2W+yIHR/vxKj/zTFjkEYqbVwR8UpgTIE6W2BjlTaOj2Ja0gGFYWRPviu0OQ8YEWmjBfgoIXv3Ug39aQN2xr6Yn2Jn+mx8liwt9WIq59swVfGnMLFujMfPw0vS9jzgkJSyI4CvY9LCvD4+ygDbCU4hzjsvify9gm1rRzj1NwZuTSlb1ELnLcAXMcLs5ZS26kkvJX05FXhbwT7dktLWZPqIyhZsLOamlF1CXKZxUsE+rBGond3Hkr8PwwwxlhF/ubswY0z96ivY13ox2Rq/cRgV/mhK+81Mj2KL4Q0Z/RuZvENs55kHHI8t2Fj7y4AzkjEE+LjkN0Sx1CjFxALs7AYzpniz5I/D5OSHF3zmA5jl7gORvBbM6uYETPFSlJOZh4lln8UsdJZj2y3Y9tuZ/LsRtptsVLDdHuy4uBBb0DHsDFyGcQ9FcA22uJ6Vv3djtBaYpdHGBdtrOp6hb2Uupm/VKvYibjVTTSuBL5CuMDkQeCijfjXNAi4HTsSIveGxxnLwOmAXTLV7OTYZec/9M/Ae4ou8NXm3lRn1H8Y3TXMxHP9InV3DOzUNv8Z/kTMyyrZiE/OC1JmJfSkxTCS0E3BTL/AX4DTs620WxgOfwYRKWQvhfuI2B2DvOEvKv4ARm1mawjOkzq/qe5XGYm/C8yumHHExBvgBNvGXEte6jcW+vrSBXghcgLFwaxrbAOdjR0usbz3Yth+TII7ERM4zsTHIYw/HEdJRZWQrqWikccIUfGOIq4Ej62jvw8B36KMtXDyFsZPX0HeOp6EdWyBbY6LdTbCzfgR9TiCL6fMSmoNNzBMYzfBqTvvDMGul04jz5wuxXaOohVEMV+NzTVOAg+torynYgtBAoquGdjqBq4h/VXMxK5wsnrwDozXOxsS5WWduXlpBn7x/T7KFRO3YQngupa0fUxstsge+FdRK0jWk/Y6v47/0Pyinb9iGuEBpFbbdZg3gTsBF+AYljU6LsSNpEum75+uSfsRYv4exXagoWjEzeLeN80rUX+NYD9/+voIRfEWwJ6HkrAL8jXTBSwemkHkiUq/Z6XHsi0/bFXbAlFNabymwT8Ex+ZTUnUtxS+h+w4fwO72IYkqQm6VeL/bVxyjjoZgk7BnyJ2oWZohxBuYJ9DZ8uX9H8v/Nk7wPJGUn4xt0pqU5wKeJi2aHYoKg2NHywZzxGI0p1Nx6R2TWGCBoIZRu/aBAvUuc8ouB/0opty+hPZ4O7m8wvcKban0JB5skbV1Htpz+CdJ9Cg8jFIv3YF94Gn4g5e9mLbIoPp7wK8zDCOx8uwjYLJK/Ecb7pk3AdEw62Ez37tHJM7KEUVcDG0bqbktc3p92RD4l5Y5v1Es0G6MJKeFL62yzK9JmNU3F2M+iX8dwbLt/K6YKfmfy/80pR6VPIl04NR/bqRRvAB6Rsj3Ej4MfSrnniMsUBhzUG+ZJQpPtPTFjiUuJq4arGIJ58caMP5/ExK5ZGAHsh9nt3YYRqOpYonRHN6aZPB+bxPVynnEQvul3Na3GTNbU7nIMoSRxBfBuKddJSNxOzulL0zCEYuzcIfgdXkko3t0Gn9pPY2uGEppfV9s8h/SvdRj2Rd2E72VUa1oJ/C5pM03HMRzzIYjJHK4m5BTGYPaKbrkXCfn7nSNtptkTuGijAQa/LZij5jT6BnJB8vsKTDhyFLAbRuWPIRSLfkHa7CTk8y+KPLuTeDSPOdiWHcNYbDEtitRrVFqETXQaV7Mz4dldwQxSdBfchJAm+DvhIjtVyszDxnosNvZHYXNxBTY3VTnIKkw5dSQ1EI8d5Ltox74U9/f9hCycSvgWExJ8IzHeX9u/Htgg0tdObItPszlw01xsMi7HdzRdmvztDopp/ZZhR0Ts+BoF3BCp8zdCfce2hNzBZVKmFVOLZ411Xvo1JU3dvlfyAZpWE279H5YyvYSsXgdxy6CLiW9ph5JuSVPBJvMybNtUyny2U2625G0IvA/4EfCvjPafAd4f6VcL8O1I+TsI5QUfiJQ7XMrsQnknGE3fjvQzik0II3PMxJwcn6aYXd3F0uYYQo+b/5EyQ4izeTHnj05CD6Jq6sF2i/3JVq9mLQAXrUlb15M+Cb8kvht8MVL2t5F+XSJl/k2oIdQyaR/e09hcqaxkFQWNSVX8OBn/6+vAiJUDMGnc9zCC6wnsjPw9obhSVbr3RQbhnMgLxewKJhAPyNCLcSBFZe1FF4CLrTGiLsZJzMAIXMWZkbJnSpmhmBzDLaMeSiMxG8Ml2FjfjNFPJ2Hc0Hj8bX4IIUd2QpGXVPfr3YtUysBEaW8VoWy/i3BnuSTS1rsIDUkqmJIljThMQy0LwO2H8vOVpG+xfnxXyvUQSg3fjj8GPdjWXw/2lOdeUKTSWVLp6Do7oQaj50v+RoTcw/WEZ/5+hNa+VX1BLbb89SwAsK/2AsLd4OWkry6GENr6Pwe8Xsp9X8r8tYZ+uThW2suy1Pp/7COVluIbepTBgdLWXEL+XXn9OYQSr3cQUvkvYYRarah3AVTxXkJK/hVMj+9iA0KB0VVS5nWEH8P+NfbrIMKQOl1FKg4h1EH3YkdDGd1+C6HMXMO5/KfkryLcQicQ3/aXYA6ctaJRC2BX4v4P/yakCXYhZOFUNaxfbVnz7zZsrnRnmk4J4dB2xAUqU8m39atCI3M+jb9VdxCKOs+RNkYQSsx0EaQZX+ahEQtgR+KLs5r+Scj7nydlZuKzhu2ENhUTC/ZnHGH0lErSxzJh9YB0anshxbal66XexyT/M5L/JKEUTFm9Fwm/tlp3gnoXQOzLX0K47f5C6g0nlBaqRvAkyS/iILs/cQebx6lh8qvoJGQlqkfCRaTb5o3DlyUsxJ/cDkJjDlXsHCb5PZghZNrAl10E9SyArD4cQrj9Kq1ykOR344/lcMzxo5q/mnQPpFbM/jEmo7gOoyvqxnGEBp8VzBNGKVkIOQllP46R/L9IfiehhM/lHupdBEOl/bkUd7Ys8uwLJH8OoaBIt+qPS/43JF/1KmBjfxfhvCyneKDLwtiBuCXO7yJlXV+9XkK7fT379evXl3+YkNUruwjejrlv/Z24lnBVkncBflDpWp45lNBf8etSRjmkGZK/reQ/EumPmtFVsDnKCptXF9YnZNu042+RfP26d5P86fjaqrH4LF8v6UKeIhPSRboDZla6G5/4Krvgdsc/Cl7CF+/GuCRtS5VAGuFMCeRriYfLayi65KG/lHyVf58m+ZdK/iclX6nkvHCwaRMzCYsNUHbiNf0kaauWI0dD1H5N8lXs/n3JV7f7z0u+Esl75fSnIfiyPPQYydevzTVy6MBnm1bgC32G4bOfPRST7afx4rHUi5lrT8Y8j76T/P9Bsq2Fyk4+mBzAJc5ewKc1xuDLBRbiE4PbyHOVG9BQtacX6FPdUJHm1k5eO764Vo1B95K6v5H8D0r+9SX6lbcInse+qCx//jcCnyU7VmBZjuO3Uv9QyVd2WXUvrjp6KdkL5IYS/aoZ3c4DX8A/v3eWDl0udc+W/I9KvgZVUpl6HlSMXf3iv0k5h4qRmP48tiMUdeqo4gCpf6PkHy35qimcLPkuPdSCv2POLtm30ujEHxQVU35aOqvqx3skf1MnbwT+dvgs5QMr65m/nPpi9B9F6Avwk5JttOJbNK/A14dsKu3fIfWVZVZfAlfZ1kvcy7putGAUqBJoP5VyOgEuO9WOP8F6POwnddU0Kg9dUr+XxlzQcBThTjCxZBs/kfqqCnYlgyvwdS56j4ESijrm52FzVbcTyebAf2NmUWlmVyqcuAN/AlyT6q2lrsbNVd6/iPWrCyU+Y6Hba4Wad91Vsv77pb7KBFTa6hLOG0jeH6SuGo1W0wKMLTyZ4qFp2BeLutmd0qgmZTvcev+SvIOlruqmb5P8mHdNGnaUus/TWCfKkYSEYZqwKIaNyZ7Er0r+gZLvPrtb8iZSbK66sbmNOawwmmKXKlbTfMIYue34Fi1TJf80aeMwyZ/j5M2NdTIDF0rbp5SsXwSfl2eUDVTt0gGzJe9waVv5fZd26iHUwZxNuSjnv8dxoWsj+zrVCqaFm4JtJ2nni67yqyVfnR1dceV6+OesEkJ5cO0Xeslm9WrFOPw+PlSy/l34k+gSgrqDqa+EsooxF7EqnXYyNlcvkj2n9wKtbZgBwrukseXYorgjSQ8knc6CKjs0wqdSp4ud/78ef1FpeLQsDMVXdz6IfW2NxrPYpO+Y/N42efbKgvXdXW0I9s5zkt+LpayOlY5lJ8b+uahg+odHsQXUirHl707S7viLbg/g6DZCXvwcTCGyPP1dotAF8LL8znopzTuY4pG12/C3xJkF69WCmfQtgPbkd1a0cBfqTeS+c97HkpcfQw/mjPI3+qKrnI7RG1V8rA1fwTATO09qQd4CUKJsmfN/faH1qV2p0YyvvwolbOsJ2lxmASyV37WMzXKMbvsQfaH03trMG0P6K5hBM5+71gRoSEHQ/zbszKja1Y3HNFbnU/4IyFvFy+S3e45p3aWYUWURtOF/ic0Mn6ptP0O5I8D9crOOQB0P/eJ1RyiC4Zgizw2k+QiYOlYpxFeAPyYVdqOYNfBm0sbPJf8Xkr+pk/dmyStzudJwfPOzWHzhRsH13nmVdHfxGFR1m/X+/yt1fyn5RY6eNmzuvozNpXs5djUdWy0YsySNsYGnkM4GjpE6qulrJhuoFkjNYAPfiN/HmIVOFu5y6vbgL56ybGAsDE6VDTyFYmzgPTi6llGYcKCoIGE+IbHYgT9Ad0l+GUGQElt5+Ja03QxB0GflGReWrO86fMyWvLKCIN2Rv0Y5QdBNxF3tmUQ5UfBEqe9a+s6TvDxR8B8lv4woeFep22hRcCe+lW6F9MDWMaiQ7DbJzxMFu8EvdfF0UWyuurG5LazOrkUZdLvku6tsK8nLUwaVdftSaWYzlUFlvXUOlfrqGq/KIJdQW6PKoDQUVQdrUETXu7UdX7eud+jtL3XLRhabJPUbpQ4+klAdXDZS94+lvipkXJ/B5fhbvBrRKn3wM8lvmDo4hrIGIZ+QfFXZburkjcQ3155L+UBHP5f2X6a+UPJbEHokK4WeBzUIWYkvNNtU2s8zCFEvoroMQsoO8DLsnK9iAv5Kmy7lu+T3nRn5L2FHSBXjCEOn5UEtiNcj9NItg90Jw8SpR28e9sGXH9yGLyVV4xBdALrbuGPcgu+AOofablkrhSyj0DZ83zil5jVgwXWSr3GGry3Rr10xpYpbfzHGvtWKcSltljEK1WBbGu9XjUYHvFHo6fLQYyVfr0pTs3A3ALKaha+Hb9m7mmKXTcYmv173cbdttTYuugjG45uFL8bfUdQsfAH+BE+Q56oXlpqFf7H4axlq0QWop8+e8lu3MNeTeBX+XTdD8SNivYIfG6cVX3sVw65YZDGX43gRI7Tuy6lbBPclbb3o/G2D5Jl5i+As/DG+FHvHKo7Ad3m7Bv+GEvXC1iNUx35aTn/qRhHXsLdJ/v2Sr0aOD+HTERviiy17SOe5m/nlx55VZifYFZ9gfhnfkbaFMBCHxgTSwFHbSb667zfVNSzNOXRKpKwGUMrr+HslXyV70wnNoNbk5LvPLLIIOggnVz2k1UX8MclX59CYBZL6UVRoknNoWfdwFfuq4EOdIfRYGUkYoPFcJ78/Jt99dt4i0KtzniWUTKbdtlqF2jl+LtKXpruH1xog4g34BqLz8M2ROvBl/xVC8ecRkt+D7RSNChBRD7L6cCBhsAYNB69i8dlkB4h4lXQ1d9MCRGSFiDmgQH1VLqlHi4ZBiQVR0MW3hP6f/CrSFoH+Td3jhhNGC1MPKg2fc1OB/jQ0RMz2hFtshXJBovQyyWcIg0TpAlP36c5IGR3wWoNENQJ5QaJmEkrm9Hj4J2GQKN0di7p9pwWJWoTRFIXQSni/by1h4iA85zTopMrvY2Hi0iKW9deXr0jzSo5F5tqVMEycSjv1up27S/YnLUzcQxRk+3VS6gkU+V5pax6hHlqDKMwhDJSsgSL7+8tX6E4QCxQ5Cj8wVYXwBpD1Ca/GiXryFEAsUGQhJdZZUkkVOmXQQng9imqzNiR86RsIV+u+mMzhfhqg3mwCdsL6NgMLgOmiFZPiue/4LOG1uKpNrVewo4qkrxSp1Ohg0TvjU6irCf3qJhIGi9Zo2WszLsJ/tx7CrX8nwmDR9R5xNQWL1rg1V1IuXPwthITPj6TNBwnDsunOUyEMlrA24mzC91JrqGGEAaP0zoWRmPj5JYqFi28lvKGlULj42IURs6jvwojRhHf66mWSLYTWrxXKO2EOJMQujLiK8HjTK+KeJ6SVyl4YobeeFr4wAsL49mVT7MoYFexUCA1D24l7KaddGTNQ0UoYDa0C/Ilw51OD0Ni4NOLKmG+VeYEO7KKhMg8ocmmUmkYtIeRP0y6NupHm3graKIwmJPgqWOx/FQdvR2i+rRdlNOLSqF9Rw50KLZiBxr302fLVe21c7Kx7Ft80DEwiqHYFFUyYpJ7MAwlp18b9iVBLN44wXvLDhPcpqF6l6LVxKzBz8oZdOF3EyLDIxZFbEfKnMwh5/w5CGUH1LDuPcte8NhvrYRK+WAjaKwm/vrGEEs4lwJZSLna/QJHQOf3qw6hhzWJXx+5DGH3rPsJFMAQzCIkRnk9Tu4CqkTiYUMBTwQjpMwhpl7HY8eiWXU5oP9mJiYndcmVc5voNscujYzz9IYQT+zhxSnUi6ff3Tcfu3lvTq34SpsaO9el54lfJb0r45fdg/VdcJuXWmsujofj18THH1Oew27wVryfka930EGYy3cxBGoPJSdTYw02TCSV8YHoBPfMrmOYvhrX2+vgWQvt/5fldnEjI4iwlnXjZhzDcvNIdv8Xi729W15sYNsPE4TeQTX3PIF3W/j5C7epqsgUz6kx7N2tJfAI17V5E+mXLVRxC3OLocuLEXgf2JXZH6mh6CiPEzsQMM3bEnEVGJ+10JP/fHBPHfjApexXxa+E1zcYmMsZmDSUUA1cw+keNRBSj8S2oKzSQom8W1iOcFDUEScO7ibs0Tyc9Jl879nVmXSzVrPQYZsaVZhW1EyHLW8Go/a6CY6Ji+bk01um14VBjh39QzoZgPPFB68F2A+USXGyLiY3LuEmXTYswvcYepG/HG2BffYxzmU7I6mWhlZDeOK9E/TWKzQm38a4a2hlGSAFX0zzMESVLqtWOaTDPxGTiym6WScsxP4czkzazFnMHRqipG3k1XUK5iCJV7IFv3LES39mmLjSSqLgR/zr4a6jPO/dwLDByzOp4Lqa2/in5sYzasBAsW2NCqDdh2+hI+hQuSzAt27Kk7ScwHnw2+TGAhmOL8lTi5nLzMadZjZhSBlfjn/9TMPnDgIHa/y3DBjoLYzBKdxYmJ4h5tY7ClCppipDnsW2/sL1bA7Edpl9P++JXY0qsWCSOkdg7z8LGIOtoA1tYenVuWRf1pkIVR1mXFLdirJ8aU84i3QNoF0yZkrVdP4CFhold4d4oTMDs89VjR9M00q2WdsHe1S3/AjYmWfcjnCF1yjjONh2ugGMx6WfdXoQGp25aiW2laQOxP6acyju7n8MEMsdgtoPReDg5GJXUPRZjI1W6GUv3kG7D14opdmL6gmp6mHQL4OH4soTZNbxTgEbRAAvok351Y2eui3HYmX14wWc+iPHW6ldYxURsMPej+K0iCzAz7fnYdlpNYDRBNW2IEVkx2iOGHsyG4UJsAcSwC0bY7piS76KCqW9PJYyZ3E2f5vR5mhsTsRTU/Lt6C+YwLE6dnl/VdDdGOasauYIN7MVkR7zYGIuB82BK+81Mj2EWP1mTMDJ5hxgNMy9597Q7DZclY1fdTdWdLm2x9QtOJnyBOaTHqpuLUbXV3WA0oRaxmm4p2IftsfBqNxOqmxuRlmK2j58jdHZNw60pbU2mT2fRkoxFWiCuF7GdQP/+6YJ9WCMYhgl98gZxBSYsUhewKg4h3A00xGwRtGGGIydirOSt2JlZ5F7AnqTsrZhA50TMWaWsUwyEO9880vX5I7CxKSK3eITidx2vMWxCeF+um26kWLQPjZrxRAP72IYRd5thX/E7k7Rd8rdRlL+pLAuu0mol+ewe2BhpGB6d/HqilDcVQzEz5XsxYms2RtB0lWhjLP4L622ZaxP0cuc8pZiLvTFWrxsby3uxbX/AffmNRl5cPMVYLJbuDExfcCwmC2iklLMFkwEclzxjBkYP5HEKqgncrYF9aghqOdeaDT0msm4OacWEUF3J722AjyT/X4xZ3zyObcUPUPy6ty6MddsqaXMbQovkbbDdbRLp1+lo37fABFqDyMBZ+F/NezLKqvYxL51d4PlfK9mm3gHo4j1S9qwCz1/ncTn+oKVpvvanvLPEfLKPhhbKq5N7CKN5VTFeymqwiEFEMI2+AVtNXPU7jjAaxrWYGPV0zHwrje3bPtJeFdtHyvcmbd2QtL0XYaS0hcQ1gR34dgFND+P2WoDrQ/h0JL+dMArGTOLh0UZiwaXcsidnPFsFWucSl0SuTxgxbSpx6yDXrGxBxrMHgQ2gO6h3Rsqo+/pyssOi6VcdC2tXxRQpm7Vb7EBoABMLUX+nlGmknOE1hyH42rIn8QfsIMJtPS8cmp7rS4hzP234oV7y6AUIQ7X24jurtOJ76a4o0OY6D1UsXYmZRR1PKOPX6OBpUBezWHgZjWB6TcG2NZLZUmxh7EHoxzCgFDgDFUdSjPp+nOIWsvqlfilS5ktSpmigxbxIZm4a8GbdAwEt5LumxyJwZWFLqX97pIxed1PGencC8UhmbvoVg9t/YXRg9/TErGemU0PgQ3x/hVfwHU6G4weo7q6h/e2Im7SvwoIzlPbPH4RpvU7ADD/PwBQktUYK0bt1zkn+3kLIKv6sxmcMSfr4laTPn2QAa+7WNexL+HXOJDTQrFDiarVBrF0ocjlmkbi8g1hLMYpsq+J7qM2CeBBrEVoxFm8afZbBf8bsCNY5Kd3/AaSKBXkeGPuMAAAAAElFTkSuQmCC",style:{width:"65px",height:"65px"}}),Object(n.jsx)("span",{children:O})]})]}),Object(n.jsxs)("div",{className:u.a.player__controls,children:[Object(n.jsx)("div",{className:u.a.progress,ref:s,onClick:function(e){var n=e.nativeEvent.offsetX/s.current.offsetWidth*t.current.duration;t.current.currentTime=n},children:Object(n.jsx)("div",{className:u.a.progress__filled,style:{flexBasis:"".concat(g,"%")}})}),Object(n.jsxs)("div",{className:u.a.controlButtons,children:[Object(n.jsxs)("div",{className:u.a.controlCapsule,children:[Object(n.jsx)("button",{"data-skip":"-10",className:u.a.icon,onClick:x,children:Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAuklEQVRIie3VsQ3CMBCF4V9QQcMEGYGeMWABZmEM2IA1CEWqrMAGlHRIocHoFF8gZzm2kPxJJ6V4eoUV+6AoClgDLXCdKK/aAw+ge0/svGcFnEXBryJrXrUBbkrJUJE175kDB+A5UNIvsuZVFVB/KegXWfOqHXAfUdIF5j1L4DSywI01r2qMJSHzMRPfQfcshgVwJMNRO1sS/1xSBVwMRVGuk5PlAZGSP5lSliUhJV+Lklvs9UT5ovhTL8w18VO1JlgoAAAAAElFTkSuQmCC",style:{width:"29px",height:"29px",backgroundColor:"lightgray",borderRadius:"5px"}})}),Object(n.jsx)("button",{className:u.a.player__button,onClick:h,title:"Toggle Play",children:c}),Object(n.jsx)("button",{"data-skip":"25",className:u.a.icon,onClick:x,children:Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAwUlEQVRIie3VsW0CMRiG4QckCtKyQfqsQMkMZApmoUu2yA4RCCSYIk3KpKIipsFNJO7OPt8Vp/ukr/Irv9Iv2T9jxgw9O5zx0hH/MOHeCzaYFOZrL4r9wKIg3/iigG+sCvFJ4oA/bDFrySeLY494bsFniwN+8ZrJtxLHvmfwTyXEOd1H0bRuBIUTqg66GvUb5m3EP1hn8pWjqOpB2nP6zyeLr9I+kEd8kvgLy0J8Y3HvS6L3tfiJk+aLPZUfM2bAuQEkB/LK6C2gmAAAAABJRU5ErkJggg==",style:{width:"29px",height:"29px",backgroundColor:"lightgray",borderRadius:"5px"}})})]}),Object(n.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(n.jsx)("img",{src:"data:image/png;base64,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",style:{width:"25px",height:"25px"}}),Object(n.jsx)("input",{type:"range",name:"volume",className:"player__slider",min:"0",max:"1",step:"0.05",onChange:function(e){var s=e.target.name;t.current[s]=e.target.value}})]})]})]})]})},g=s.p+"static/media/bunnyStory.589e728e.mp4";s(40);var p=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{children:"Video Analytics Player"}),Object(n.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:Object(n.jsx)(f,{src:g})})]})},j=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,42)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),i(e),r(e)}))},v=s(17),O=s(27),B=s(12),y={data:[],mph:"0",rpm:"0"};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return Object(B.a)(Object(B.a)({},e),{},{data:Object(O.a)(t.val)});case"changeMph":return Object(B.a)(Object(B.a)({},e),{},{mph:t.val});case"changeRpm":return Object(B.a)(Object(B.a)({},e),{},{rpm:t.val});default:return e}},L=Object(v.b)(h);c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(b.a,{store:L,children:Object(n.jsx)(p,{})})}),document.getElementById("root")),j()},9:function(e,t,s){e.exports={player__controls:"Video_player__controls__32Uim",player__video:"Video_player__video__21rQy",player:"Video_player__2ngrn",mph:"Video_mph__1gc-r",progress:"Video_progress__2nJP8",progress__filled:"Video_progress__filled__8vehh",player__button:"Video_player__button__2c1zQ",icon:"Video_icon__37oMA",controlCapsule:"Video_controlCapsule__2IxOJ",controlButtons:"Video_controlButtons__2Onnx",dynamicControls:"Video_dynamicControls__1jqZy"}}},[[41,1,2]]]);
//# sourceMappingURL=main.b41e4236.chunk.js.map