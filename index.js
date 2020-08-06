//绑定事件
var imgs = document.getElementById('imgs');
var list = document.getElementById('list');
var activeImg = null;
var activeItem = null;
var timer = null;
var imgDoms = [];
var itemDoms = [];


data.forEach(function(item, index) {
    // 图片逻辑
    // 创建a标签
    var tagImg = document.createElement('a');
    imgDoms.push(tagImg);
    // 给a标签设置属性
    tagImg.setAttribute('href', '#');
    // 给a标签添加class名
    tagImg.className = 'img';
    // 设置背景图片和背景颜色填充空余
    tagImg.style.backgroundImage = 'url(' + item.img + ')';
    tagImg.style.backgroundColor = item.bg;
    // 非第一个图片隐藏
    index != 0 ? tagImg.style.display = "none" : activeImg = tagImg;
    // 把a标签插入到imgs下层
    imgs.appendChild(tagImg);
    // 标题逻辑
    var tagItem = document.createElement('a');
    itemDoms.push(tagItem);
    // 标签切换
    index == 0 ? tagItem.setAttribute('class', 'active') & (activeItem = tagItem) : tagItem.setAttribute('class', 'list-nav');
    // 给a标签设置属性
    tagItem.setAttribute('title', item.title + '：' + item.desc);
    tagItem.innerHTML = `<span> ${item.title} </span>` + item.desc;
    tagItem.addEventListener('mouseenter', function() {
        clearInterval(timer);
        // 活跃的元素，隐藏或者切换类名
        activeImg.style.display = 'none';
        activeItem.className = 'list-nav';
        // 重新记录新的活跃元素以及图片
        activeItem = tagItem;
        activeImg = tagImg;
        // 活跃元素激活
        activeImg.style.display = 'block';
        activeItem.className = 'active';
    });
    tagItem.addEventListener('mouseleave', function() {
        timer = setInterval(move, 2000);
    });
    // 把a标签插入到list下层
    list.appendChild(tagItem);
});
// 定时器逻辑
function move() {
    // 活跃的元素，隐藏或者切换类名
    activeImg.style.display = 'none';
    activeItem.className = 'list-nav';
    // 找到接下来的活跃图片和item 
    var index = itemDoms.indexOf(activeItem);
    index == data.length - 1 ? index = 0 : index++;
    var tagItem = itemDoms[index];
    var tagImg = imgDoms[index];
    // 重新记录新的活跃元素以及图片
    activeItem = tagItem;
    activeImg = tagImg;
    // 活跃元素激活
    activeImg.style.display = 'block';
    activeItem.className = 'active';
}
timer = setInterval(move, 2000);