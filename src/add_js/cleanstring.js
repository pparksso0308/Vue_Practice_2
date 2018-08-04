export default function(string, type){
  let str = string;
  if(type == "title" || type == "description"){         // 필요 없는 내용들을 다 지운다.
    str = string.replace(/<b>/g, "");
    str = str.replace(/<\/b>/g, "");
    str = str.replace(/&quot;/g, "");
    str = str.replace(/&lt;/g, "");
    str = str.replace(/&gt;/g, "");
    str = str.replace(/&amp;/g, "");
    return str;
  }
  else{
    str = string.replace(/<b>/g, "");
    str = str.replace(/<\/b>/g, "");
    str = str.replace(/&quot;/g, "");
    str = str.replace(/&lt;/g, "");
    str = str.replace(/&gt;/g, "");
    str = str.replace(/&amp;/g, "");
    return str;
  }

}
