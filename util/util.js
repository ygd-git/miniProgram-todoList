const util = {};

/**
 * 多段文本拆分
 * 换行文本
 * 1.xxx 2.xxx 3.xxx
 */
util.multiTermSplit = function (text){
  let wordWrapNum = checkIsWordWrap(text).sections,
    numWrapNum = checkIsNumWrap(text).sections;

  
  return wordWrapNum > numWrapNum ? checkIsWordWrap(text).sectionArr :
    checkIsNumWrap(text).sectionArr;
}

function checkIsWordWrap(text){
  let rstObj = {
    sections: 0,
    sectionArr: []
  };
  let textSplit = text.split('\n');

  rstObj.sections = textSplit.length;
  rstObj.sectionArr = textSplit;  

  return rstObj;
}

function checkIsNumWrap(text) {
  // 应该都是从1.xx开始写的
  let startNum = 1;
  let rstObj = {
    sections: 0,
    sectionArr: []
  };
  text.replace('。','.');
  
  while (text.length>0 && text.indexOf(startNum + '.') >= 0){
    rstObj.sections++;
    let contentStartIndex = text.indexOf(startNum + '.') + 2;

    text = text.slice(contentStartIndex);

    let newItem = '';
    if (text.indexOf(rstObj.sections + 1 + '.')>0 ){
      newItem = text.slice(0, text.indexOf(rstObj.sections + 1 + '.'));
    }else{
      newItem = text.slice(0);
    }
    rstObj.sectionArr.push(newItem);

    text = text.slice(newItem.length)
    startNum ++;
  }

  return rstObj
}

module.exports = util;