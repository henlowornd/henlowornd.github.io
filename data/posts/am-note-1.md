---
title: "高等数学笔记-不定积分1"
author: Deed9189
tags:
- "笔记"
- "高等数学"
excerpt: "略"
date: 2026-01-07
hasAI: false
---
# 常用积分表

---

### 所有积分一定要增加常数C！！！

hint: 被积函数的加减可以拆分为两个积分的加减。

---

# 第一换元积分法（凑微分）

常用简单凑微分法则：  
$$
\begin{aligned}
 \int f(\ln x) \frac{1}{x}\  \mathrm{d}x & = \int f(\ln x)\  \mathrm{d}\ln x\\\\
 \int f(\frac{1}{x})\frac{1}{x^2}\  \mathrm{d}x &= -\int f(\frac{1}{x})\  \mathrm{d}\frac{1}{x}\\\\
 \int f(\sin x)\cos x \ \mathrm{d} x &= \int f(\sin x)\ \mathrm{d}\sin x \\\\
 \int f(\sqrt x) \frac{1}{2\sqrt x}\ \mathrm d x&= \int f(\sqrt x) \mathrm d \sqrt x\\\\
 \int f(\tan x) \sec ^2x\  \mathrm d x &= \int f(\tan x) \ \mathrm d\tan x
\end{aligned}
$$

e.g.
$$
\begin{aligned}
 &\int x^2 \sqrt{x^3 + 1}\ \mathrm d x \\\\
 &= \frac 1 3 \int\sqrt{x^3 + 1}\ \mathrm d x^3 \\\\
 &= \frac 1 3 \int (x^3 + 1)^\frac 1 2 \ \mathrm d x^3 \\\\
 &= \frac 1 3 \int (x^3 + 1)^\frac 1 2 \ \mathrm d x^3 + 1
\end{aligned}
$$

---

### 例题：

$$
\int \frac {1}{1 + \mathrm e^x} \ \mathrm dx
$$

- 解法一：分式化为整数减去分式  

$$
\begin{split}
 &\int \frac {1}{1 + \mathrm e^x} \ \mathrm dx \\\\
 &= \int 1 \ \mathrm dx - \int \frac {\mathrm e^x}{1 + \mathrm e^x} \ \mathrm dx \\\\
 &= x - \int \frac{1}{1 + \mathrm e^x}\ \mathrm d(1 + \mathrm e^x)\\\\
 &= \boxed{x - \ln{(1 + \mathrm e^x)} + \mathrm C}
\end{split}
$$

- 解法二：分母分子同时乘除因子  

$$
\begin{split}
 &\int \frac{1}{1 + \mathrm e^x} \ \mathrm dx \\\\
 &= \int \frac{\mathrm e^{-x}}{1 + \mathrm e^{-x}} \ \mathrm d x \\\\
 &= -\int \frac{1}{1 + \mathrm e^{-x}} \ \mathrm d(1 + \mathrm e^{-x})
\end{split}
$$

- 解法三：（应用第二换元-整体换元法）

$$
\begin{split}
 &\int \frac{1}{1 + \mathrm e^x} \ \mathrm dx \\\\
 &= \int \frac{\mathrm e^x}{\mathrm e^x(1 + \mathrm e^x)} \ \mathrm dx \\\\
 &= \int \frac{1}{\mathrm e^x(1 + \mathrm e^x)} \ \mathrm d \mathrm e^x
\end{split}
$$

令$\mathrm e^x = t$，则有

$$
\begin{split}
 &\int \frac{1}{\mathrm e^x(1 + \mathrm e^x)} \ \mathrm d \mathrm e^x \\\\
 &= \int \frac{1}{t(1 + t)} \ \mathrm dt \\\\
 &= \int \frac{1}{t} \ \mathrm dt \ - \int \frac{1}{1 + t} \ \mathrm d(1 + t) \\\\
 &= \ln |t| \ - \ \ln|1 + t| \ + \ \mathrm C \\\\
\end{split}
$$

$
 \because |\mathrm e^x| = \mathrm e^x \\\\
 \therefore
$

$$
\begin{split}
 &\ln |t| \ - \ \ln|1 + t| \ + \ \mathrm C \\\\
 &= \ln \mathrm e^x - \ln{(1 + \mathrm e^x)} + \mathrm C \\\\
 &= \boxed{x \ - \ \ln {(1 + \mathrm e^x)} \ + \ \mathrm C}
\end{split}
$$

---

hint:  
$
\sin x \cdot \csc x = 1 \\\\
\cos x \cdot \sec x = 1 \\\\
\tan x \cdot \cot x = 1 \\\\
\sin^2 x + \cos^2 x = 1 \\\\
\tan^2 x + 1 = \sec^2 x \\\\
\cot^2 x + 1 = \csc^2 x
$

---

### 例题：

求下列不定积分：  
(1)$$\int \tan^3 x \ \mathrm dx$$
(2)$$\int \frac{1}{\sin^2 x + 2\cos^2 x} \ \mathrm dx$$
解：  

(1)
$$
\begin{aligned}
 &\int \tan^3 x \ \mathrm dx \\\\
 &=\int \tan x \cdot \tan^2 x \ \mathrm dx \\\\
 &=\int \tan x \cdot (\sec^2 x - 1) \ \mathrm dx \\\\
 &=\int \tan x \cdot \mathrm d\tan x \ - \ \int \tan x \ \mathrm d x \\\\
 &=\frac 1 2 \tan^2 x - \int \frac {\sin x}{\cos x} \ \mathrm d x \\\\
 &=\boxed{\frac 1 2 \tan^2 x + \ln |\cos x| + \mathrm C}
\end{aligned}
$$

(2)
$$
\begin{aligned}
 &\int \frac{1}{\sin^2 x + 2\cos^2 x} \ \mathrm dx \\\\
 &=\int \frac{\sec^2 x}{\tan^2 x + 2} \ \mathrm dx \\\\
 &=\int \frac{1}{\tan^2 x + 2} \ \mathrm d\tan x \\\\
 &=\frac{1}{\sqrt 2}\int \frac{1}{\frac{tan^2x}{2} + 1} \ \mathrm d\tan x\\\\
 &=\boxed{\frac{1}{\sqrt 2}\arctan \frac{\tan x}{\sqrt 2} + \mathrm C}
\end{aligned}
$$

**技巧:**  
若出现形如
$$
\int \frac{1}{a\sin^2 x + b\cos^2 x} \ \mathrm dx
$$
的积分，上下同除$\cos^2 x$后适用如积分公式
$$
\frac{1}{a^2}\int \frac{1}{\frac{x^2}{a^2} + 1} \ \mathrm dx \ = \ \frac{1}{a} \arctan \frac{x}{a} + \mathrm C
$$
等。  
如分母有$c\sin x\cos x$项亦可适用。

---

# 第二换元积分法（整体换元）

根号->三角代换：

当$\int f(x) \ \text dx$的$f(x)$中含有$\sqrt {a^2 - x^2}$时,  
**令$x=a\sin t$**.  
当$\int f(x) \ \text dx$的$f(x)$中含有$\sqrt {a^2 + x^2}$时,  
 **令$x=a\tan t$**.  
当$\int f(x) \ \text dx$的$f(x)$中含有$\sqrt{x^2 - a^2}$时，  
**令$x=a\sec t$**.  
若为一次根式，**直接令整体为$t$**.  

当$\int f(x) \ \text dx$的$f(x)$中含有$\sqrt[m]{x}$与$\sqrt[n]{x}$时，  
令$\sqrt[\lambda]{x} = t$，其中$\lambda$为$m$与$n$的最小公倍数。  

**切记对$\mathrm dx$也要按照关系式换元**  
**完成积分后, 将x按照三角形几何关系回代**（亦可使用反函数，但三角几何更加简洁）
