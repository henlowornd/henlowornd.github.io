---
title: "线性代数笔记-1"
author: Deed9189
tags:
- "笔记"
- "线性代数"
excerpt: "略"
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

||$A$|$A^2$|$f(A)$|$A^{-1}$|$A^*$|$A^T$|$\beta = P^{-1}AP$|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|特征值|$\lambda$|$\lambda^2$|$f(\lambda)$|$\frac{1}{\lambda}$|$\frac{\begin{vmatrix} A \end{vmatrix}}{\lambda}$|$\lambda$|$\lambda$|
|特征向量|$\alpha$|$\alpha$|$\alpha$|$\alpha$|$\alpha$|**不确定**|$\alpha$|

- 若$A$为$n$阶矩阵，且有$n$个互异特征值$\lambda_1$，$\lambda_2$，...，$\lambda_n$，则对应的特征向量$\alpha_1$，$\alpha_2$，...，$\alpha_n$线性无关。

# 对角化

矩阵$A$可对角化的充分必要条件：  
$A$有$n$个线性无关的特征向量。  
设$A$的$n$个线性无关的特征向量为$\alpha_1$，$\alpha_2$，...，$\alpha_n$，对应的特征值为$\lambda_1$，$\lambda_2$，...，$\lambda_n$，则构造矩阵
$$
\begin{split}
 P &= (\alpha_1 \ \alpha_2 \ ... \ \alpha_n) \\\\
 D &= 
 \begin{pmatrix}
  \lambda_1 & 0 & ... & 0 \\\\
  0 & \lambda_2 & ... & 0 \\\\
  ... & ... & ... & ... \\\\
  0 & 0 & ... & \lambda_n
 \end{pmatrix}
\end{split}
$$

则有
$$
\underline {P^{-1}AP = D}
$$
即$A$相似于对角矩阵$D$，称$A$可对角化。

若矩阵$A$正交，则其特征向量组可正交化，且可构成正交矩阵$P$，即$P^{-1} = P^T$。

# 线性变换与矩阵

线性变换：
设$V$，$W$为两个线性空间，映射$T: V \to W$，若对任意$\alpha$，$\beta \in V$及任意标量$k$均有
$$
\begin{split}
 T(\alpha + \beta) &= T(\alpha) + T(\beta) \\\\
 T(k\alpha) &= kT(\alpha)
\end{split}
$$
则称$T$为从$V$到$W$的线性变换。  
**矩阵是对线性变换的表示。**
设$T: V \to W$为线性变换，$\alpha \in V$，$\beta \in W$，且有$\beta = T(\alpha)$。  
设$V$，$W$的基分别为$\{\alpha_1, \alpha_2, ..., \alpha_n\}$，$\{\beta_1, \beta_2, ..., \beta_m\}$，则存在唯一的$m \times n$矩阵$A$，使得
$$
[\beta] = A[\alpha]
$$
其中$[\alpha]$，$[\beta]$分别为$\alpha$，$\beta$在各自基下的坐标向量。  
矩阵$A$称为线性变换$T$在基$\{\alpha_1, \alpha_2, ..., \alpha_n\}$，$\{\beta_1, \beta_2, ..., \beta_m\}$下的矩阵表示。

---

施密特正交化过程：  
设$V$为内积空间，$\alpha_1, \alpha_2, ..., \alpha_n$为$V$中线性无关的向量组，定义向量组$\beta_1, \beta_2, ..., \beta_n$如下：
$$
\begin{split}
    \beta_1 &= \alpha_1 \\\\
    \beta_2 &= \alpha_2 - \frac{(\alpha_2, \beta_1)}{(\beta_1, \beta_1)}\beta_1 \\\\
    \beta_3 &= \alpha_3 - \frac{(\alpha_3, \beta_1)}{(\beta_1, \beta_1)}\beta_1 - \frac{(\alpha_3, \beta_2)}{(\beta_2, \beta_2)}\beta_2 \\\\
    ...\\\\
    \beta_n &= \alpha_n - \sum_{i=1}^{n-1} \frac{(\alpha_n, \beta_i)}{(\beta_i, \beta_i)}\beta_i
\end{split}
$$