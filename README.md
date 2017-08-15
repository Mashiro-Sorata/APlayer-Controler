<div align="center"><h1>Aplayer Controler</h1></div>

<div align="center"><img src="http://oty1v077k.bkt.clouddn.com/apc-demo-preview.png"></div>
<div align="center">Powered By <a href="http://mashirosorata.vicp.io">Mashiro_Sorata</a></div>


---

## Content
1. [Introduction](#u1)
2. [Install](#u2)
3. [Usage](#u3)
4. [Read more](#u4)
5. [License](#u5)

---

<h2 id="u1">Introduction</h2>

[DEMO](http://mashirosorata.vicp.io/others/Aplayer-Controler-demo/index.html)

The *Aplayer Controler* is a tool to make users control the *aplayer* more easily. <br>Enjoying with its lovely customizable interface.

<h2 id="u2">Install</h2>

```git
$ npm install aplayer-controler --save
```

<h2 id="u3">Usage</h2>

```html
  <div id="myapcid"></div>
  <script src="./Aplayer-Controler.min.js"></script>
```

```javascript
  var myap = new APlayer({......});
  var myapc=new APlayer_Controler({
    	 APC_dom:$('#myapcid'),
	     aplayer:myap,
    	 position:{top:'300px'},
	     img_src:['http://oty1v077k.bkt.clouddn.com/bukagirl.jpg',
		            'http://oty1v077k.bkt.clouddn.com/jumpgirl.jpg',
		            'http://oty1v077k.bkt.clouddn.com/%E8%90%8C1.gif'],
  });
```
<h2 id="u4">Read more</h2>

[Read More details](http://mashirosorata.vicp.io/APlayer-Controler——可自定义的ap控制器.html)

<h2 id="u5">License</h2>

[MIT License](https://github.com/Mashiro-Sorata/APlayer-Controler/blob/master/LICENSE)
