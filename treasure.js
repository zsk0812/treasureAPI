// 模拟宝藏地图API
class TreasureMap {
  static async getInitialClue() {
    const response = await fetch('treasureAPI/library.txt');
    const data = await response.text();
    return data;
  }

  static async decodeAncientScript(clue) {
    if (!clue) {
      throw new Error("没有线索可以解码!");
    }
    const response = await fetch('treasureAPI/fane.txt');
    const data = await response.text();
    return data;
  }

  static async searchTemple(location) {
    const random = Math.random();
    if (random < 0.5) {
      const response = await fetch('treasureAPI/guard.txt');
      const data = await response.text();
      throw new Error(data);
    }
    const response = await fetch('treasureAPI/treasure.txt');
    const data = await response.text();
    return data;
  }

  static async openTreasureBox() {
    const response = await fetch('treasureAPI/supply.txt');
    const data = await response.text();
    return data;
  }
}

async function findTreasureWithAsyncAwait() {
  try {
    const clue = await TreasureMap.getInitialClue();
    console.log(clue);
    const location = await TreasureMap.decodeAncientScript(clue);
    console.log(location);
    const box = await TreasureMap.searchTemple(location);
    console.log(box);
    const treasure = await TreasureMap.openTreasureBox();
    console.log(treasure);
  } catch (error) {
    console.error("任务失败:", error);
  }
}

// 1. 创建棋盘
const board = [
  ['-', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '-']
];

// 2. 创建人物
let player = {
  x: 1,
  y: 1
};

// 3. 移动人物
function movePlayer(direction) {
  switch (direction) {
    case 'w':
    case '上':
      if (player.y > 0) player.y--;
      break;
    case 's':
    case '下':
      if (player.y < 2) player.y++;
      break;
    case 'a':
    case '左':
      if (player.x > 0) player.x--;
      break;
    case 'd':
    case '右':
      if (player.x < 2) player.x++;
      break;
  }
}

// 测试移动人物
movePlayer('w'); // 向上移动
console.log(player); // 输出人物的新位置
