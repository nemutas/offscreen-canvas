# About

Web Worker と OffscreenCanvas を組み合わせたデモ

https://nemutas.github.io/offscreen-canvas/

# Note
[OffscreenCanvas](https://developer.mozilla.org/ja/docs/Web/API/OffscreenCanvas)  
Safariでは、`16.4`（2023.3.27）からサポートされた仕様なので、実用では注意したい。

---
workerファイル内でimportを使用する場合、`type: 'module'`を設定する。  
https://github.com/nemutas/offscreen-canvas/blob/601900ef2b1b6e2a998f5a3c095d865ab53f17b7/src/scripts/entry.ts#L6-L6

---
Workerスレッドでは、windowオブジェクトやdocumentオブジェクトにアクセスできないので、RenderTargetの解像度をwindow/canvas elementサイズに合わせる場合は、その値もWorkerに送る必要がある。  
https://github.com/nemutas/offscreen-canvas/blob/601900ef2b1b6e2a998f5a3c095d865ab53f17b7/src/scripts/entry.ts#L8-L17

---
resize処理をする場合も、同様。  
https://github.com/nemutas/offscreen-canvas/blob/601900ef2b1b6e2a998f5a3c095d865ab53f17b7/src/scripts/entry.ts#L19-L25

---
worker内でeventを識別する。  
https://github.com/nemutas/offscreen-canvas/blob/601900ef2b1b6e2a998f5a3c095d865ab53f17b7/src/scripts/worker.ts#L3-L14
