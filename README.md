<div align="center"><h1>Aplayer Controler</h1></div>

<div align="center">Powered By <a href="https://mashiros.top">Mashiro_Sorata</a></div>


---

## Content
1. [Introduction](#u1)
2. [Install](#u2)
3. [Quick Start](#u3)
4. [Details](#u4)
5. [Read more](#u5)
6. [License](#u6)

---

<h2 id="u1">Introduction</h2>

[DEMO](http://mashiros.top/others/Aplayer-Controler-demo/index.html)

The *Aplayer Controler* is a tool to make users control the [*Aplayer*](https://github.com/MoePlayer/APlayer) more easily. <br>Enjoying with its lovely customizable interface.

<h2 id="u2">Install</h2>

```git
$ npm install aplayer-controler --save
```

<h2 id="u3">Quick Start</h2>

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
		  'http://oty1v077k.bkt.clouddn.com/%E8%90%8C1.gif']
  });
```

<h2 id="u4">Details</h2>

```javascript
var myap = new APlayer({......});  //Aplayer Part

var myapc=new APlayer_Controler({  //Controler Part
      APC_dom:'#myapcid',														
      aplayer:myap,														
      attach_right:true,													
      position:{top:'300px',bottom:''},
      fixed:true,															
      btn_width:100,														
      btn_height:120,														
      img_src:['http://oty1v077k.bkt.clouddn.com/bukagirl.jpg',
               'http://oty1v077k.bkt.clouddn.com/jumpgirl.jpg',
               'http://oty1v077k.bkt.clouddn.com/%E8%90%8C1.gif'],															
      img_style:{repeat:'no-repeat',position:'center',size:'contain'},
      ctrls_color:'rgba(173,255,47,0.7)',			
      ctrls_hover_color:'rgba(255,140,0,0.8)',		
      tips_on:true,														
      tips_width:140,														
      tips_height:25,														
      tips_color:'rgba(255,255,255,0.5)',
      tips_content:{														
          on_loading:{top:'音乐加载中',bottom:'不如来卖萌'},			
          on_welcome:{top:'音乐加载完成',bottom:'请继续看我卖萌'},		
          on_timeout:{top:'播放器暂无响应',bottom:'那就看我卖萌'},		
          on_error:{top:'音乐播放出错',bottom:'那就看我卖萌'},			
          on_listend:{top:'歌单已到底部',bottom:'接着看我卖萌'},		
          on_nohistory:{top:'没有历史纪录',bottom:'快去听歌吧！'},		
          on_historyend:{top:'历史纪录已到头',bottom:'快去听新歌吧！'}
        },
      timeout:30,
      showOnPhone:false,
      songrecord_log:false
};
```

* `APC_dom`: Required, controler's id or className--"#id", ".class", $();
* `aplayer`: Required, aplayer object;
* `attach_right`: Optional, whether controler on the right, default: true;
* `position`: Required, controler's position;
* `fixed`: Optional, whether controler fixed on the page, default: true;
* `btn_width`: Optional, button's width, default: 100;
* `btn_height`: Optional, button's height, default: 120;
* `img_src`: Optional, button's background-image "url-array", default: [];
* `img_style`: Optional, style of button's background-images, default: in [Javascript](#u4);;
* `ctrls_color`: Optional, controlers' color, default: "rgba(173,255,47,0.7)";
* `ctrls_hover_color`: Optional, controlers' color when the mouse hover, default: "rgba(255,140,0,0.8)";
* `tips_on`: Optional, the message's switch, default: true;
* `tips_width`: Optional, the message's width, default: 140;
* `tips_height`: Optional, the message's height, default: 25;
* `tips_color`: Optional, the message's background-color,default: "rgba(255,255,255,0.5)";
* `tips_content`: Optional, the message's content, default: in [Javascript](#u4);
* `timeout`: Optional, the longest time to wait player's "canplay" event when `tips_on` is true. And The button is disabled during this time. In addition, the `on_loading` of `tips_content` will close when `timeout` is "0", and the button is valid all the time. default: 30;
* `showOnPhone`: Optional, whether the "Aplayer-Controler" is dispalyed on the phone, default: false;
* `songrecord_log`: Optional, whether the song history shows in the console, default: false.


<h2 id="u5">Read more</h2>

[Read More Here](http://mashiros.top/APlayer-Controler——可自定义的ap控制器.html)

<h2 id="u6">License</h2>

[MIT License](https://github.com/Mashiro-Sorata/APlayer-Controler/blob/master/LICENSE)
