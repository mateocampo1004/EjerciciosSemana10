'Use Strict'
let id = ("https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link");
let start = id.indexOf("/view");
alert(id.slice(32,start))
