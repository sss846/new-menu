// 菜品数据库
const foodDatabase = {
  staples: [
    {
      id: 's1',
      name: '白米饭',
      category: '主食',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=white%20rice%20in%20a%20bowl%20realistic%20food%20photography&image_size=landscape_4_3',
      detail: '精选东北大米，颗粒饱满，香气四溢，口感软糯适中。'
    },
    {
      id: 's2',
      name: '牛肉面',
      category: '主食',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beef%20noodle%20soup%20chinese%20food%20realistic%20photography&image_size=landscape_4_3',
      detail: '浓郁牛骨汤底熬制8小时，配上手工面条和精选牛肉，口感丰富。'
    },
    {
      id: 's3',
      name: '鲜肉包',
      category: '主食',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pork%20buns%20chinese%20steamed%20buns%20realistic%20photography&image_size=landscape_4_3',
      detail: '皮薄馅大，采用新鲜猪肉调制，口感鲜美多汁。'
    },
    {
      id: 's4',
      name: '虾仁馄饨',
      category: '主食',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=shrimp%20wonton%20soup%20chinese%20food%20realistic%20photography&image_size=landscape_4_3',
      detail: '鲜嫩虾仁配以精选猪肉，手工包制，汤头鲜美。'
    },
    {
      id: 's5',
      name: '油条',
      category: '主食',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20fried%20dough%20sticks%20youtiao%20realistic%20photography&image_size=landscape_4_3',
      detail: '传统工艺制作，外酥里嫩，口感酥脆可口。'
    },
    {
      id: 's6',
      name: '手抓饼',
      category: '主食',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20hand%20grab%20pancake%20realistic%20food%20photography&image_size=landscape_4_3',
      detail: '层次分明，外酥内软，可搭配多种食材。'
    },
    {
      id: 's7',
      name: '小笼包',
      category: '主食',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=xiaolongbao%20chinese%20soup%20dumplings%20realistic%20photography&image_size=landscape_4_3',
      detail: '江苏传统名点，皮薄馅多，汤汁丰富，口感鲜美。'
    },
    {
      id: 's8',
      name: '炒饭',
      category: '主食',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fried%20rice%20chinese%20food%20realistic%20photography&image_size=landscape_4_3',
      detail: '粒粒分明，香气四溢，配以鸡蛋、胡萝卜等食材。'
    }
  ],
  stirfry: [
    {
      id: 'f1',
      name: '糖醋排骨',
      category: '炒菜',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=sweet%20and%20sour%20pork%20ribs%20chinese%20food%20realistic%20photography&image_size=landscape_4_3',
      detail: '精选排骨，酸甜可口，外酥里嫩，是经典的中式炒菜。'
    },
    {
      id: 'f2',
      name: '红烧肉',
      category: '炒菜',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=braised%20pork%20belly%20chinese%20food%20realistic%20photography&image_size=landscape_4_3',
      detail: '传统名菜，肥而不腻，入口即化，色泽红亮。'
    },
    {
      id: 'f3',
      name: '宫保鸡丁',
      category: '炒菜',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=kung%20pao%20chicken%20chinese%20food%20realistic%20photography&image_size=landscape_4_3',
      detail: '川菜经典，鸡肉嫩滑，花生香脆，麻辣鲜香。'
    },
    {
      id: 'f4',
      name: '回锅肉',
      category: '炒菜',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=twice%20cooked%20pork%20chinese%20food%20realistic%20photography&image_size=landscape_4_3',
      detail: '四川名菜，肉片肥瘦相间，搭配蒜苗，香辣可口。'
    },
    {
      id: 'f5',
      name: '麻婆豆腐',
      category: '炒菜',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mapo%20tofu%20chinese%20food%20realistic%20photography&image_size=landscape_4_3',
      detail: '川菜代表，豆腐嫩滑，麻辣鲜香，口感丰富。'
    },
    {
      id: 'f6',
      name: '鱼香肉丝',
      category: '炒菜',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yu%20xiang%20rou%20si%20fish%20fragrant%20shredded%20pork%20chinese%20food%20realistic%20photography&image_size=landscape_4_3',
      detail: '川菜经典，肉丝嫩滑，配以木耳、胡萝卜，酸甜可口。'
    },
    {
      id: 'f7',
      name: '蒜蓉西兰花',
      category: '炒菜',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=garlic%20broccoli%20chinese%20food%20realistic%20photography&image_size=landscape_4_3',
      detail: '清新爽口，西兰花翠绿，蒜蓉香气扑鼻，健康美味。'
    },
    {
      id: 'f8',
      name: '番茄炒蛋',
      category: '炒菜',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tomato%20and%20egg%20stir%20fry%20chinese%20food%20realistic%20photography&image_size=landscape_4_3',
      detail: '家常菜经典，番茄酸甜可口，鸡蛋嫩滑，营养搭配合理。'
    }
  ],
  fruits: [
    {
      id: 'fr1',
      name: '蔬菜沙拉',
      category: '水果',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fresh%20vegetable%20salad%20realistic%20photography&image_size=landscape_4_3',
      detail: '新鲜蔬菜搭配特制沙拉酱，清爽健康，富含维生素。'
    },
    {
      id: 'fr2',
      name: '水果拼盘',
      category: '水果',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fresh%20fruit%20platter%20realistic%20photography&image_size=landscape_4_3',
      detail: '多种时令水果组合，色彩鲜艳，营养丰富，口感多样。'
    },
    {
      id: 'fr3',
      name: '水果蛋糕',
      category: '水果',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fresh%20fruit%20cake%20realistic%20photography&image_size=landscape_4_3',
      detail: '松软蛋糕配上新鲜水果，口感层次丰富，甜度适中。'
    },
    {
      id: 'fr4',
      name: '草莓慕斯',
      category: '水果',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=strawberry%20mousse%20cake%20realistic%20photography&image_size=landscape_4_3',
      detail: '丝滑细腻的慕斯，配上新鲜草莓，酸甜可口，口感轻盈。'
    },
    {
      id: 'fr5',
      name: '酸奶水果杯',
      category: '水果',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yogurt%20fruit%20parfait%20cup%20realistic%20photography&image_size=landscape_4_3',
      detail: '希腊酸奶搭配时令水果，健康美味，富含蛋白质。'
    },
    {
      id: 'fr6',
      name: '苹果',
      category: '水果',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fresh%20red%20apple%20realistic%20photography&image_size=landscape_4_3',
      detail: '新鲜苹果，果肉脆甜，富含维生素和膳食纤维。'
    },
    {
      id: 'fr7',
      name: '香蕉',
      category: '水果',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fresh%20yellow%20bananas%20realistic%20photography&image_size=landscape_4_3',
      detail: '成熟香蕉，果肉软糯，香甜可口，富含钾元素。'
    },
    {
      id: 'fr8',
      name: '橙子',
      category: '水果',
      orderCount: 0,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fresh%20orange%20fruit%20realistic%20photography&image_size=landscape_4_3',
      detail: '新鲜橙子，果肉饱满，酸甜多汁，富含维生素C。'
    }
  ]
};

// 全局状态
let selectedItems = new Set();
let orderHistory = [];
let foodOrderCounts = {};
let currentFoodDetailId = null;

// DOM 元素
const staplesItems = document.getElementById('staples-items');
const stirfryItems = document.getElementById('stirfry-items');
const fruitsItems = document.getElementById('fruits-items');
const selectedCount = document.getElementById('selectedCount');
const selectedList = document.getElementById('selectedList');
const clearBtn = document.getElementById('clearBtn');
const orderBtn = document.getElementById('orderBtn');
const totalOrders = document.getElementById('totalOrders');
const statsGrid = document.getElementById('statsGrid');
const orderList = document.getElementById('orderList');
const confirmModal = document.getElementById('confirmModal');
const modalClose = document.getElementById('modalClose');
const modalCancel = document.getElementById('modalCancel');
const modalConfirm = document.getElementById('modalConfirm');
const orderSummary = document.getElementById('orderSummary');
const detailModal = document.getElementById('detailModal');
const detailModalClose = document.getElementById('detailModalClose');
const detailModalCloseBtn = document.getElementById('detailModalCloseBtn');
const detailModalAddBtn = document.getElementById('detailModalAddBtn');
const foodDetailImage = document.getElementById('foodDetailImage');
const foodDetailName = document.getElementById('foodDetailName');
const foodDetailCategory = document.getElementById('foodDetailCategory');
const foodDetailText = document.getElementById('foodDetailText');
const foodDetailOrderCount = document.getElementById('foodDetailOrderCount');

// 初始化
function init() {
  loadData();
  renderMenu();
  renderStats();
  renderOrderHistory();
  updateSelectedDisplay();
  bindEvents();
}

// 加载数据
function loadData() {
  const savedHistory = localStorage.getItem('orderHistory');
  const savedCounts = localStorage.getItem('foodOrderCounts');
  
  if (savedHistory) {
    orderHistory = JSON.parse(savedHistory);
  }
  
  if (savedCounts) {
    foodOrderCounts = JSON.parse(savedCounts);
  }
  
  // 初始化菜品点餐次数
  Object.values(foodDatabase).forEach(category => {
    category.forEach(item => {
      if (!foodOrderCounts[item.id]) {
        foodOrderCounts[item.id] = 0;
      }
    });
  });
}

// 保存数据
function saveData() {
  localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
  localStorage.setItem('foodOrderCounts', JSON.stringify(foodOrderCounts));
}

// 渲染菜单
function renderMenu() {
  // 渲染主食区
  staplesItems.innerHTML = foodDatabase.staples.map(item => createMenuItemHTML(item)).join('');
  
  // 渲染炒菜区
  stirfryItems.innerHTML = foodDatabase.stirfry.map(item => createMenuItemHTML(item)).join('');
  
  // 渲染水果区
  fruitsItems.innerHTML = foodDatabase.fruits.map(item => createMenuItemHTML(item)).join('');
}

// 创建菜单项HTML
function createMenuItemHTML(item) {
  const orderCount = foodOrderCounts[item.id] || 0;
  const isSelected = selectedItems.has(item.id);
  
  return `
    <div class="menu-item ${isSelected ? 'selected' : ''}" data-id="${item.id}">
      <div class="checkbox" onclick="toggleSelection('${item.id}'); event.stopPropagation();"></div>
      <div class="item-image" onclick="showFoodDetail('${item.id}'); event.stopPropagation();">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="item-info" onclick="showFoodDetail('${item.id}'); event.stopPropagation();">
        <div class="item-name">${item.name}</div>
        <div class="item-category">${item.category}</div>
      </div>
      ${orderCount > 0 ? `<span class="order-count" onclick="showFoodDetail('${item.id}'); event.stopPropagation();">已点${orderCount}次</span>` : ''}
    </div>
  `;
}

// 切换选择
function toggleSelection(itemId) {
  if (selectedItems.has(itemId)) {
    selectedItems.delete(itemId);
  } else {
    selectedItems.add(itemId);
  }
  
  // 更新菜单项样式
  const menuItem = document.querySelector(`.menu-item[data-id="${itemId}"]`);
  if (menuItem) {
    menuItem.classList.toggle('selected', selectedItems.has(itemId));
  }
  
  // 更新选中数量
  selectedCount.textContent = selectedItems.size;
  
  // 更新已选菜品显示
  updateSelectedDisplay();
}

// 更新已选菜品显示
function updateSelectedDisplay() {
  if (selectedItems.size === 0) {
    selectedList.innerHTML = '<p class="empty-message">请从上方菜单中选择菜品</p>';
    return;
  }
  
  let html = '';
  selectedItems.forEach(itemId => {
    const item = findItemById(itemId);
    if (item) {
      html += `
        <div class="selected-item">
          ${item.name}
          <button class="remove-btn" onclick="toggleSelection('${itemId}'); event.stopPropagation();">×</button>
        </div>
      `;
    }
  });
  
  selectedList.innerHTML = html;
}

// 根据ID查找菜品
function findItemById(itemId) {
  for (const category of Object.values(foodDatabase)) {
    const item = category.find(i => i.id === itemId);
    if (item) return item;
  }
  return null;
}

// 显示菜品详情
function showFoodDetail(itemId) {
  currentFoodDetailId = itemId;
  const item = findItemById(itemId);
  
  if (item) {
    const orderCount = foodOrderCounts[itemId] || 0;
    
    // 更新详情弹窗内容
    foodDetailImage.innerHTML = `<img src="${item.image}" alt="${item.name}">`;
    foodDetailName.textContent = item.name;
    foodDetailCategory.textContent = item.category;
    foodDetailText.textContent = item.detail;
    foodDetailOrderCount.textContent = orderCount > 0 ? `已点 ${orderCount} 次` : '首次点选';
    
    // 显示弹窗
    detailModal.classList.add('show');
  }
}

// 隐藏菜品详情弹窗
function hideFoodDetail() {
  detailModal.classList.remove('show');
  currentFoodDetailId = null;
}

// 渲染统计信息
function renderStats() {
  // 更新总点餐次数
  const totalOrderCount = Object.values(foodOrderCounts).reduce((sum, count) => sum + count, 0);
  totalOrders.textContent = totalOrderCount;
  
  // 创建统计数组
  const stats = [];
  Object.values(foodDatabase).forEach(category => {
    category.forEach(item => {
      const count = foodOrderCounts[item.id] || 0;
      if (count > 0) {
        stats.push({
          name: item.name,
          count: count,
          id: item.id
        });
      }
    });
  });
  
  // 按点餐次数排序
  stats.sort((a, b) => b.count - a.count);
  
  // 渲染统计网格
  if (stats.length === 0) {
    statsGrid.innerHTML = '<p class="empty-message">暂无点餐数据</p>';
    return;
  }
  
  statsGrid.innerHTML = stats.map((stat, index) => `
    <div class="stat-item" onclick="showFoodDetail('${stat.id}')" title="点击查看详情">
      <span class="stat-rank">第${index + 1}名</span>
      <span class="stat-name">${stat.name}</span>
      <span class="stat-count">${stat.count}次</span>
    </div>
  `).join('');
}

// 显示点餐详情
function showOrderDetails(itemId) {
  const count = foodOrderCounts[itemId] || 0;
  const item = findItemById(itemId);
  
  if (item) {
    alert(`${item.name}\n累计点餐次数：${count}次\n\n${count > 0 ? '这是您最喜欢的菜品之一！' : '还没有点过这道菜。'}`);
  }
}

// 渲染点餐历史
function renderOrderHistory() {
  if (orderHistory.length === 0) {
    orderList.innerHTML = '<p class="empty-message">暂无点餐记录</p>';
    return;
  }
  
  orderList.innerHTML = orderHistory.map((order, index) => `
    <div class="order-item" onclick="showOrderDetail(${index})">
      <div class="order-info">
        <div class="order-items">${order.items.join('、')}</div>
        <div class="order-date">${order.date}</div>
      </div>
      <div class="order-count">${order.items.length}道菜</div>
    </div>
  `).join('');
}

// 显示订单详情
function showOrderDetail(orderIndex) {
  const order = orderHistory[orderIndex];
  let message = `点餐时间：${order.date}\n\n菜品清单：\n`;
  order.items.forEach((itemName, index) => {
    message += `${index + 1}. ${itemName}\n`;
  });
  
  alert(message);
}

// 绑定事件
function bindEvents() {
  // 清空按钮
  clearBtn.addEventListener('click', function() {
    selectedItems.clear();
    selectedCount.textContent = '0';
    renderMenu();
    updateSelectedDisplay();
  });
  
  // 点餐按钮
  orderBtn.addEventListener('click', function() {
    if (selectedItems.size === 0) {
      alert('请先选择菜品！');
      return;
    }
    
    // 显示确认弹窗
    showConfirmModal();
  });
  
  // 弹窗关闭按钮
  modalClose.addEventListener('click', hideConfirmModal);
  modalCancel.addEventListener('click', hideConfirmModal);
  
  // 确认点餐
  modalConfirm.addEventListener('click', confirmOrder);
  
  // 点击弹窗外部关闭
  confirmModal.addEventListener('click', function(e) {
    if (e.target === confirmModal) {
      hideConfirmModal();
    }
  });
  
  // 菜品详情弹窗
  detailModalClose.addEventListener('click', hideFoodDetail);
  detailModalCloseBtn.addEventListener('click', hideFoodDetail);
  
  // 添加到订单
  detailModalAddBtn.addEventListener('click', function() {
    if (currentFoodDetailId) {
      toggleSelection(currentFoodDetailId);
      hideFoodDetail();
    }
  });
  
  // 点击详情弹窗外部关闭
  detailModal.addEventListener('click', function(e) {
    if (e.target === detailModal) {
      hideFoodDetail();
    }
  });
}

// 显示确认弹窗
function showConfirmModal() {
  // 生成订单摘要
  const selectedNames = [];
  selectedItems.forEach(itemId => {
    const item = findItemById(itemId);
    if (item) {
      selectedNames.push(item.name);
    }
  });
  
  orderSummary.innerHTML = selectedNames.map(name => `<li>${name}</li>`).join('');
  confirmModal.classList.add('show');
}

// 隐藏确认弹窗
function hideConfirmModal() {
  confirmModal.classList.remove('show');
}

// 确认点餐
function confirmOrder() {
  const orderItems = [];
  const orderTime = new Date().toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  // 记录点餐
  selectedItems.forEach(itemId => {
    const item = findItemById(itemId);
    if (item) {
      orderItems.push(item.name);
      foodOrderCounts[item.id] = (foodOrderCounts[item.id] || 0) + 1;
    }
  });
  
  // 添加到历史记录
  const order = {
    id: Date.now(),
    items: orderItems,
    date: orderTime,
    itemIds: Array.from(selectedItems)
  };
  
  orderHistory.unshift(order);
  
  // 限制历史记录数量
  if (orderHistory.length > 50) {
    orderHistory = orderHistory.slice(0, 50);
  }
  
  // 保存数据
  saveData();
  
  // 更新显示
  renderStats();
  renderOrderHistory();
  
  // 清空选择
  selectedItems.clear();
  selectedCount.textContent = '0';
  renderMenu();
  updateSelectedDisplay();
  
  // 隐藏弹窗
  hideConfirmModal();
  
  // 显示成功提示
  alert(`点餐成功！\n\n您点了 ${orderItems.length} 道菜：\n${orderItems.join('、')}`);
}

// 页面加载动画
window.addEventListener('load', function() {
  document.querySelectorAll('.app-main > section').forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      section.style.transition = 'all 0.5s ease';
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }, index * 150);
  });
});

// 键盘快捷键
window.addEventListener('keydown', function(e) {
  if (e.code === 'Escape') {
    hideConfirmModal();
    hideFoodDetail();
  }
});

// 初始化应用
init();