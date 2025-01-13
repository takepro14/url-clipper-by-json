javascript: (function () {
  const tag = prompt('タグを入力:', 'vim');
  const comment = prompt('コメントを入力:', '');
  if (!tag) return;
  const json = `
  {\n
    "tag": "${tag}",\n
    "title": "${document.title}",\n
    "url": "${window.location.href}",\n
    "comment": "${comment}"\n
  },`;
  navigator.clipboard
    .writeText(json)
    .then(() => alert('クリップボードにコピーしました!'))
    .catch((err) => alert('コピーに失敗しました: ' + err));
})();
