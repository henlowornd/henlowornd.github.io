---
title: "高等数学笔记-不定积分2"
author: Deed9189
tags:
- "笔记"
- "高等数学"
excerpt: "略"
date: 2026-01-13
hasAI: false
---
# 分部积分法：

公式：
$$
\int u \ \mathrm dv = uv - \int v \ \mathrm du
$$
其中$u$为易微分函数，$\mathrm dv$为易积分函数。

选择$u$的优先级："反对幂三指"/"反对幂指三"

- 反三角函数
- 对数函数
- 幂函数
- 指数函数/三角函数

e.g.
$$
\begin{split}
\int x^2 \mathrm e^x \ \mathrm d x &= \int x^2 \ \mathrm d \mathrm e^x\\\\
&= x^2 \mathrm e^x - \int \mathrm e^x \ \mathrm d x^2\\\\
&= x^2 \mathrm e^x - 2 \int x \mathrm e^x \ \mathrm d x\\\\
&= x^2 \mathrm e^x - 2\left(x \mathrm e^x - \int \mathrm e^x \ \mathrm d x\right)\\\\
&= (x^2 - 2x + 2) \mathrm e^x + \mathrm C
\end{split}

$$

——适用于本题型的快速积分法：
$$
\int x^n \mathrm e^x \ \mathrm d x = (\sum^n_{k=0} (-1)^k \frac{n!}{(n-k)!} x^{n-k}) \mathrm e^x + \mathrm C
$$
即对$x^n$依次求导，乘以$(-1)^k$后累加，最后乘以$\mathrm e^x$。  

---

e.g.  
$$
\begin{split}
\int x^2 \cos x \ \mathrm d x
&= x^2 \sin x - \int \sin x \ \mathrm d x^2\\\\
&= x^2 \sin x - 2 \int x \sin x \ \mathrm d x\\\\
&= x^2 \sin x - 2\left(-x \cos x + \int \cos x \ \mathrm d x\right)\\\\
&= x^2 \sin x + 2x \cos x - 2 \sin x + \mathrm C
\end{split}
$$

——适用本题型的快速积分法：

将两个函数交替求导/积分，直到其中一个出现原函数为止，将其乘积累加，然后整理方程得出结果。

---

e.g.
$$
\begin{split}
\int \mathrm e^{2x} \cos x \ \mathrm d x = \frac 1 5 \mathrm e^{2x}(\sin x + 2 \cos x) + \mathrm C
\end{split}
$$

——适用此题型的快速积分法：
设$I = \int \mathrm e^{ax} \cos bx \ \mathrm d x$，则有
$$
\begin{split}
I &= \frac{
    \begin{vmatrix}
    \mathrm e^{ax} & \cos bx \\\\
    a \mathrm e^{ax} & -b \sin bx
    \end{vmatrix}
}{a^2 + b^2}  + \mathrm C
\end{split}
$$

注意：对于e的指数为其他函数(如$2x$)的情况，需要先整体换元。  
考试使用：  
**由快速积分法得**：(formula sheet)
