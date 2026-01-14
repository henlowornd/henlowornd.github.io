---
title: "高等数学笔记-3-杂项"
author: Deed9189
tags:
- "笔记"
- "高等数学"
excerpt: "略"
date: 2026-01-13
hasAI: false
---

# 罗尔定理的构造函数

若题目所给等式形如  
$$
f(x) + Af'(x) = 0
$$
其中$A$为函数或常数；  
则可构造函数
$$
F(x) = e^{\int A \ dx}f(x)
$$

$
\because
F'(x) = e^{\int A \ dx}f'(x) + Ae^{\int A \ dx}f(x) = e^{\int A \ dx}(f'(x) + Af(x)) = 0 
$  
且
$
e^{\int A \ dx} \neq 0
$  
$
\therefore
f'(x) + Af(x) = 0
$  
得证。  
其余情况，如形如多项式或导数四则运算公式易得，故不作赘述。
