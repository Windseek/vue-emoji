import {emojidbs} from '../emojidb'
//根究value值获取对应的url
function getUrl(phrase){
    let url="";
    emojidbs.forEach(item=>{
      if(item.phrase==phrase){
        url=item.url;
      }
    });
    return url;
  }
  function formatText(text){
    let reg=/\[[^\]]+\]/g;
    let rs=text.match(reg);
    if(rs){
      rs.forEach(item=>{
        text=text.replace(item,"<img src=\""+getUrl(item)+"\"/>");
      })
    }
    return text;
  }
  export default{
    getUrl,
    formatText
  }
