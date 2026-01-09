---
title: "线性代数笔记-1"
author: Deed9189
tags:
- "笔记"
- "线性代数"
excerpt: "从略"
date: 2026-01-06
hasAI: false
---

### 设矩阵$A$,特征值$\lambda$, 单位矩阵$E$, 未知解向量X

# 特征值和特征向量

特征向量：在线性变换中，基向量张成空间内不改变方向/维度，只发生线性变化的向量。  
特征值：上述向量在变换中在其方向上伸缩的比值。负值即为翻转。  
求特征值，特征向量：  
由特征方程
$$
|\lambda E - A| = 0
$$
解出所有$\lambda$可能取值，即为特征值。  
将解的特征值带回
$$
(\lambda E - A)X = \mathbf 0
$$
解得所有特征值对应解向量，即为特征向量。  

对于求解特征值:  
对特征行列式**消去非$\mathbf \lambda$元素**, 取得**公因子***。  
e.g.
$$
\begin{split}
 &\begin{vmatrix}
  \lambda - 1 & -2 & -3 \\\\
  -2 & \lambda - 1 & -3 \\\\
  -3 & -3 & \lambda - 6
 \end{vmatrix}
 \xlongequal{r3 + r1(-1)}
 \begin{vmatrix}
  \lambda + 1 & -1 - \lambda & 0 \\\\
  -2 & \lambda - 1 & -3 \\\\
  -3 & -3 & \lambda - 6
 \end{vmatrix}
 \xlongequal{c1 + c2}
 \begin{vmatrix}
  \lambda + 1 & 0 & 0 \\\\
  -2 & \lambda - 3 & -3 \\\\
  -3 & -6 & \lambda - 6
 \end{vmatrix}\\\\
 &=(-1)^{1+1}
 (\lambda + 1)
 \begin{vmatrix}
  \lambda - 3 & -3 \\\\
  -6 & \lambda - 6
 \end{vmatrix}
 =(\lambda + 1)[(\lambda - 3)(\lambda - 6) - 18] \\\\
 &= (\lambda - 1)(\lambda + 9) \cdot \lambda
\end{split}
$$
解得
$$
\boxed{\lambda_1 = 1, \lambda_2 = -9, \lambda_3 = 0}
$$

---
hint：  
关于$A$的若干性质：  

- 设$A$的特征值为$\lambda_1$，$\lambda_2$，$\lambda_3$，则

$$
\begin{split}
 \begin{vmatrix}
  A
 \end{vmatrix}
 &=\lambda_1 \lambda_2 \lambda_3 \\\\
 \mathrm{tr}(A) &= \lambda_1+\lambda_2+\lambda_3
\end{split}
$$

- 若$\lambda$为$A$的特征值，$\alpha$为$\lambda$对应的特征向量，则
$$
\underline {A \alpha = A \lambda}
$$

|表头|表头|表头|
|:---:|:---:|:---:|
||||
||||
