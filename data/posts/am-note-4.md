---
title: "高等数学笔记-4-空间解析几何与向量代数"
author: Deed9189
tags:
- "笔记"
- "高等数学"
excerpt: "略"
date: 2026-05-08
hasAI: false
---
# 概念

高数中，仅讨论自由向量，与起点无关。  
两种表达式：  
坐标式： $\vec{OM} = (x, y, z) \quad$
分量式： $\vec{OM} = x\vec{i} + y\vec{j} + z\vec{k}$  
考试中两种写法均可。

与$r$同向的单位向量的模长：
$$
e = \frac{\vec{r}}{|\vec{r}|}
$$

方向角：任意向量与对应坐标轴的夹角
方向余弦：
$$
\cos n = \frac{a_n}{\sqrt{x^2 + y^2 + z^2}}
$$

也就是单位向量在各个方向的**分量**。

投影：
$$
Prj_a \vec{b} = |\vec{b}| \cos \theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}|}
$$

向量三积：  
数量积/内积/点积：
$$
\vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos \theta
$$
向量积/外积/叉积：
$$
\vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin \theta \vec{n}
$$
混合积：
$$
(\vec{a} \times \vec{b}) \cdot \vec{c}
$$

注意：通过两个向量的向量积能够得到其构成平面的法向量。  
向量积可以通过计算：
$$
\begin{vmatrix}
\vec{i} & \vec{j} & \vec{k} \\
a_1 & a_2 & a_3 \\
b_1 & b_2 & b_3
\end{vmatrix}
$$
求得。  
速算口诀：前上后下取两边，掐头去尾得中间，交叉相乘再相减。

# 平面方程

平面方程的一般式：  
$$
Ax + By + Cz + D = 0
$$
其中$A, B, C$不全为$0$， $(A, B, C)$就是平面的一个法向量。
$$