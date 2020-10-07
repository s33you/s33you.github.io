
var mingyan=new Array();
mingyan.push("{'index':1,'content':'失眠就像是，一个无人认领的梦，一段言无所向的人生，和一场明知故犯的恋情。你不愿这些发生，但你也清楚这些早晚要发生，就像终于盼来了困意，却也迎来了黎明。</br> - </br>郑执'}");
mingyan.push("{'index':2,'content':'如果不是真的喜欢，谁又愿意当一条舔狗呢。</br> - </br>梁志斌'}");
mingyan.push("{'index':3,'content':'有人。</br> - </br>乐爷'}");
mingyan.push("{'index':4,'content':'她98年的，我玩不过她。</br> - </br>梁志斌'}");
mingyan.push("{'index':5,'content':'虽然心里面很不爽，但没有什么反驳的理由。</br> - </br>ClearLove'}");
mingyan.push("{'index':6,'content':'一个十块钱的垫纸手表，和一个一百万的劳力士，时间都是一样的转动。</br> - </br>药子'}");
mingyan.push("{'index':7,'content':'保安，保护不了任何人</br> - </br>篮子'}");
mingyan.push("{'index':8,'content':'周淑怡，你是我尝过咸的味道</br> - </br>药子'}");
mingyan.push("{'index':9,'content':'你妈妈和我的猫都很想你……骗你的啦哈哈哈，我没有猫，你也没有</br> - </br>孙笑川'}");
mingyan.push("{'index':10,'content':'说到痛处就气急败坏，说到底还不是条懒狗</br> - </br>孙笑川'}");
mingyan.push("{'index':11,'content':'如果手上没有剑，我就无法保护你，如果我一直握着剑，就无法抱紧你</br> - </br>撕破伤口、'}");

/**
    随机获取名言.

    直接调用此函数即可.
*/
function getMingYan(){
  return (mingyan[parseInt(Math.random()*(mingyan.length-1)+1)]);
}

/*
  获取名言,并链接至One.
*/
function getMingYanHref(){
  var item = getItem();
  return "<a href='https://wufazhuce.com/one/"+item.index+"' target='_blank'>"+item.content+"</a>";
}

function getItem(){
  return eval('(' +(mingyan[parseInt(Math.random()*(mingyan.length-1)+1)])+ ')');
}

/*
  只获取内容.
*/
function getMingYanContent(){
  var item = getItem();
  return item['content'];
}