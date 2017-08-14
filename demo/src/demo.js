var ap1 = new APlayer({
	    element: document.getElementById('player1'),                       // Optional, player element
	    narrow: false,                                                     // Optional, narrow style
	    autoplay: false,                                                    // Optional, autoplay song(s), not supported by mobile browsers
	    showlrc: 0,                                                        // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
	    mutex: true,                                                       // Optional, pause other players when this player playing
	    theme: '#8B008B',                                                  // Optional, theme color, default: #b7daff
	    mode: 'random',                                                    // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
	    preload: 'metadata',                                               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
	    listmaxheight: '250px',                                             // Optional, max height of play list
	    music: [
	    {
	    	title: 'No title',                                          // Required, music title
	        author: 'れをる,ギガP',                          // Required, music author
	        url: 'http://ou68gv0zg.bkt.clouddn.com/%E3%82%8C%E3%82%92%E3%82%8B,%E3%82%AE%E3%82%ACP%20-%20No%20title.mp3',  // Required, music url
	        pic: 'http://ou68gv0zg.bkt.clouddn.com/%E3%82%8C%E3%82%92%E3%82%8B,%E3%82%AE%E3%82%ACP%20-%20No%20title.jpg'
	    },
	    {
	    	title: '空想フォレスト',
	    	author: '伊東歌詞太郎',
	    	url: 'http://ou68gv0zg.bkt.clouddn.com/%E4%BC%8A%E6%9D%B1%E6%AD%8C%E8%A9%9E%E5%A4%AA%E9%83%8E%20-%20%E7%A9%BA%E6%83%B3%E3%83%95%E3%82%A9%E3%83%AC%E3%82%B9%E3%83%88.mp3',
	    	pic: 'http://ou68gv0zg.bkt.clouddn.com/%E4%BC%8A%E6%9D%B1%E6%AD%8C%E8%A9%9E%E5%A4%AA%E9%83%8E%20-%20%E7%A9%BA%E6%83%B3%E3%83%95%E3%82%A9%E3%83%AC%E3%82%B9%E3%83%88.gif'
	    },
	    {
	    	title: 'だんご大家族',
	    	author: '茶太',
	    	url: 'http://ou68gv0zg.bkt.clouddn.com/Key%20Sounds%20Label%20-%20%E3%81%A0%E3%82%93%E3%81%94%E5%A4%A7%E5%AE%B6%E6%97%8F.mp3',
	    	pic: 'http://ou68gv0zg.bkt.clouddn.com/Key%20Sounds%20Label%20-%20%E3%81%A0%E3%82%93%E3%81%94%E5%A4%A7%E5%AE%B6%E6%97%8F.jpg'
	    },
	    {
	    	title: 'Clover Heart\'s-New days recording',
	    	author: 'MANYO,三輪学',
	    	url: 'http://ou68gv0zg.bkt.clouddn.com/MANYO,%E4%B8%89%E8%BC%AA%E5%AD%A6%20-%20Clover%20Heart%27s%20-New%20days%20recording-.mp3',
	    	pic: 'http://ou68gv0zg.bkt.clouddn.com/MANYO,%E4%B8%89%E8%BC%AA%E5%AD%A6%20-%20Clover%20Heart%27s%20-New%20days%20recording-.jpg'
	    },
	    {
	    	title: 'Secret',
	    	author: '茶太',
	    	url: 'http://ou68gv0zg.bkt.clouddn.com/%E8%8C%B6%E5%A4%AA%20-%20Secret.mp3',
	    	pic: 'http://ou68gv0zg.bkt.clouddn.com/%E8%8C%B6%E5%A4%AA%20-%20Secret.jpg'
	    }]
});

var ap2 = new APlayer({
	    element: document.getElementById('player2'),                       // Optional, player element
	    narrow: true,                                                     // Optional, narrow style
	    autoplay: false,                                                    // Optional, autoplay song(s), not supported by mobile browsers
	    showlrc: 0,                                                        // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
	    mutex: true,                                                       // Optional, pause other players when this player playing
	    theme: '#8B008B',                                                  // Optional, theme color, default: #b7daff
	    mode: 'order',                                                    // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
	    preload: 'metadata',                                               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
	    listmaxheight: '250px',                                             // Optional, max height of play list
	    music: [
	    {
	    	title: '楽園PROJECT',                                          // Required, music title
	        author: 'Ray',                          // Required, music author
	        url: 'http://ou68gv0zg.bkt.clouddn.com/Ray%20-%20%E6%A5%BD%E5%9C%92PROJECT.mp3',  // Required, music url
	        pic: 'http://ou68gv0zg.bkt.clouddn.com/Ray%20-%20%E6%A5%BD%E5%9C%92PROJECT.jpg'
	    },
	    {
	    	title: '恋人を射ち堕とした日',
	    	author: 'Sound Horizon',
	    	url: 'http://ou68gv0zg.bkt.clouddn.com/Sound%20Horizon%20-%20%E6%81%8B%E4%BA%BA%E3%82%92%E5%B0%84%E3%81%A1%E5%A0%95%E3%81%A8%E3%81%97%E3%81%9F%E6%97%A5%20_%20Koibito%20wo%20Uchiotoshia%20Hi.mp3',
	    	pic: 'http://ou68gv0zg.bkt.clouddn.com/Sound%20Horizon%20-%20%E6%81%8B%E4%BA%BA%E3%82%92%E5%B0%84%E3%81%A1%E5%A0%95%E3%81%A8%E3%81%97%E3%81%9F%E6%97%A5.jpg'
	    },
	    {
	    	title: 'cat\'s dance',
	    	author: 'すーぱーそに子',
	    	url: 'http://ou68gv0zg.bkt.clouddn.com/%E3%81%99%E3%83%BC%E3%81%B1%E3%83%BC%E3%81%9D%E3%81%AB%E5%AD%90%20-%20cat%27s%20dance.mp3',
	    	pic: 'http://ou68gv0zg.bkt.clouddn.com/%E3%81%99%E3%83%BC%E3%81%B1%E3%83%BC%E3%81%9D%E3%81%AB%E5%AD%90%20-%20cat%27s%20dance.jpg'
	    },
	    {
	    	title: '夏令时记录(piano.ver)',
	    	author: 'ゆめこ',
	    	url: 'http://ou68gv0zg.bkt.clouddn.com/%E3%82%86%E3%82%81%E3%81%93%20-%20%E5%A4%8F%E4%BB%A4%E6%97%B6%E8%AE%B0%E5%BD%95%28piano.ver%29.mp3',
	    	pic: 'http://ou68gv0zg.bkt.clouddn.com/%E3%82%86%E3%82%81%E3%81%93%20-%20%E5%A4%8F%E4%BB%A4%E6%97%B6%E8%AE%B0%E5%BD%95%28piano.ver%29.jpg'
	    },
	    {
	    	title: '月光',
	    	author: '鬼束千寻',
	    	url: 'http://ou68gv0zg.bkt.clouddn.com/%E9%AC%BC%E6%9D%9F%E5%8D%83%E5%AF%BB%20-%20%E6%9C%88%E5%85%89.mp3',
	    	pic: 'http://ou68gv0zg.bkt.clouddn.com/%E9%AC%BC%E6%9D%9F%E5%8D%83%E5%AF%BB%20-%20%E6%9C%88%E5%85%89.jpg'
	    }]
});

var myapc1=new APlayer_Controler({
		APC_dom:$('#apc1'),
		aplayer:ap1,
		attach_right:true,
		position:{top:'300px',bottom:''},
		fixed:false,
		btn_width:170,
		btn_height:200,
		img_src:['http://oty1v077k.bkt.clouddn.com/bukagirl.jpg',
				'http://oty1v077k.bkt.clouddn.com/jumpgirl.jpg',
				'http://oty1v077k.bkt.clouddn.com/pentigirl.jpg',
				'http://oty1v077k.bkt.clouddn.com/%E8%90%8C1.gif'],
		img_style:{repeat:'no-repeat',position:'center',size:'contain'},
		ctrls_color:'rgba(173,255,47,0.7)',
		ctrls_hover_color:'rgba(255,140,0,0.8)',
		tips_on:true,
		tips_width:140,
		tips_height:25,
		tips_color:'rgba(255,255,255,0.8)',
		tips_content:{on_loading:{top:'音乐加载中',bottom:'自定义提示1'},
					  on_welcome:{top:'音乐加载完成',bottom:'自定义提示2'},
					  on_timeout:{top:'播放器暂无响应',bottom:'自定义提示3'}},
		timeout:30,
		songrecord_log:true
	});

var myapc2=new APlayer_Controler({
		APC_dom:$('#apc2'),
		aplayer:ap2,
		attach_right:false,
		position:{top:'300px',bottom:''},
		fixed:true,
		btn_width:170,
		btn_height:200,
		img_src:['http://oty1v077k.bkt.clouddn.com/bukagirl.jpg',
				'http://oty1v077k.bkt.clouddn.com/jumpgirl.jpg',
				'http://oty1v077k.bkt.clouddn.com/pentigirl.jpg',
				'http://oty1v077k.bkt.clouddn.com/%E8%90%8C1.gif'],
		img_style:{repeat:'no-repeat',position:'center',size:'contain'},
		ctrls_color:'rgba(255,140,0,0.7)',
		ctrls_hover_color:'rgba(173,255,47,0.8)',
		tips_on:true,
		tips_width:140,
		tips_height:25,
		tips_color:'rgba(255,255,255,0.8)',
		tips_content:{},
		timeout:30
	});
