---
title: "Setting up a C++ competitive programming environment for Sublime Text on Windows"
date: "2019-01-15T13:55:12.000Z"
slug: "setting-up-a-c-competitive-programming-environment"
image: "https://blog.codingblocks.com/content/images/2019/01/coaching-coders-coding-7374-1.jpg"
description: "When we are participating in a programming contest, our aim is to be as quick and as efficient as possible. However, often the tools we use during contests are clunky, non-intuitive and impede our speed. The following post will help you set up Sublime Text in a way that leads"
tags: []
original_url: "https://blog.codingblocks.com/2019/setting-up-a-c-competitive-programming-environment/"
---

When we are participating in a programming contest, our aim is to be as quick and as efficient as possible. However, often the tools we use during contests are clunky, non-intuitive and impede our speed. The following post will help you set up Sublime Text in a way that leads to a good workflow - from reading the problem statement to submitting the solution.

## Setting up the Environment

### 1\. Install MinGW Compiler

MinGW is a native Windows port of the GNU Compiler Collection (GCC). Install the latest MinGW compiler, after downloading from [here.](https://sourceforge.net/projects/mingw/)  
Your path should preferably be `C:\MinGW`. Finally, add the `bin` directory, `C:\MinGW\bin` to the System PATH.

### 2\. Install Sublime Text

Sublime Text is one of the most popular editors for development in general. It’s smooth and fast compared to other editors (being written in C++ helps that speed). Sublime also has tons of plugins you can find through Package Control. Download and install Sublime Text 3 from [here](https://www.sublimetext.com/3).

### 3\. Create a build system

Sublime Text provides build systems to allow users to run external programs. Create a new build system for Sublime Text for setting up C++ compilation.  
Go to `Tools > Build System > New Build System`. Paste the following code in the file and save it.

```
{
"cmd": ["g++.exe","-std=c++17", "${file}", "-o", "${file_base_name}.exe", "&&" , "${file_base_name}.exe<inputf.in>outputf.in"],
"shell":true,
"working_dir":"$file_path",
"selector":"source.cpp"
}
```

This can be used for piping input from the `inputf.in` file, and output to the `outputf.in` file. Note that this uses the `-std=c++17` flag to enable the latest features of C++17. If you don't want this or want to use C++14, replace this with the `-std=c++14` flag.

### 4\. Setup window layout

Create three new files, `file.cpp`, `inputf.in`, and `outputf.in`. Select `View > Layout > Columns : 3`. This will create three columns in the workspace. Move the three files into the three columns. Select `View > Groups > Max Columns : 2`.

![image](https://i.imgur.com/CMUt1Hk.png)

The windows will look like above when you are done. Write a hello world program, and test its working. Use `Ctrl+B` to build and execute the file.

### 5\. Precompile headers

Now we can speed up compilation time by precompiling all the header files as mentioned [here](https://codeforces.com/blog/entry/53909), i.e. by precompiling the `bits/stdc++.h` header file. This can speed up compilation time by up to a factor of 12.  
For this, first, navigate to the `stdc++.h` file. This will be located at a directory similar to `C:\MinGW\lib\gcc\mingw32\6.3.0\include\c++\mingw32\bits`. Right click while pressing Shift to open a Powershell/cmd window there. Run the command `g++ -std=c++17 stdc++.h`, to compile the header. Take care to use the same flags you used in your build system. Check to make sure that the `stdc++.h.gch` file was created in the directory.

Finally, we can take advantage of the features of Sublime Text, namely snippets and completions.

## Sublime Text features

### Snippets

![image](https://i.imgur.com/gtuWYu3.png)

Snippets are smart templates that will insert text for you and adapt it to their context. Read up on the documentation of snippets at [the official guide](http://docs.sublimetext.info/en/latest/extensibility/snippets.html). You can create snippets like the following to quickly insert snippets of code into your file.

```
<snippet>
    <content><![CDATA[
int gcd(int n1, int n2)
{
    if (n2 != 0) return gcd(n2, n1%n2);
    else return n1;
}

]]></content>
  <tabTrigger>zzgcd_function</tabTrigger>
  <source>source.cpp</source>
</snippet>
```

You can also create starter templates like these :

```
<snippet>
    <content><![CDATA[
// Created by ...
#include <bits/stdc++.h>

#define db1(x) cout<<#x<<"="<<x<<'\n'
#define db2(x,y) cout<<#x<<"="<<x<<","<<#y<<"="<<y<<'\n'
#define db3(x,y,z) cout<<#x<<"="<<x<<","<<#y<<"="<<y<<","<<#z<<"="<<z<<'\n'
#define rep(i,n) for(int i=0;i<(n);++i)
#define repA(i,a,n) for(int i=a;i<=(n);++i)
#define repD(i,a,n) for(int i=a;i>=(n);--i)

using namespace std;
using ll = long long;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        vector<int> v(n);
        rep(i,n) cin>>v[i];
        ${1:}
    
        cout<<'\n';
    }
    return 0;
}
]]></content>
  <tabTrigger>zzcodestarter</tabTrigger>
  <source>source.cpp</source>
</snippet>
```

### Completions

![image](https://i.imgur.com/f3ilIvA.png)

Sublime Text suggests completions that aggregate code or content while writing by catching everything that you have written, like variable names. Read up on the documentation of completions at [the official guide](http://docs.sublimetext.info/en/latest/extensibility/completions.html). You can create completions like the following to quickly enter common phrases into your file.

```
{
    "scope": "source.c++, meta.block.c++, meta.function.c++",

    "completions":
    [
        "vector<int> ",
        "vector<pair<int,int>> ",
        "vector<string> ",
        "vector<char> ",
        "vector<bool> ",
        "set<int> ",
        "set<pair<int,int>> ",
        "set<string> ",
        "set<char> ",
        "set<bool> ",
        "map<int,int> ",
        "map<string,int> ",
        "map<int,string> ",
        "first",
        "second",
        "make_pair",
        "make_tuple",
        "push_back",
        "for(int ${1:i}=${2:0}; ${1:i}<${3:n}; ${1:i}++) {$4}",
        "cout.precision(8); cout<<fixed; ",
        "cin>>", 
        "cout<<${1:}<<'\n';",
    ]
}
```

This provides an experience close to code completion, with the advantage that you can customize it to phrases you frequently type.

You can create snippet or completion files by putting the corresponding code in a `.sublime-snippet` or `.sublime-completions` file.

So that's the basics out of the way, you can now begin coding. You can also explore various other features present in Sublime text, especially its plugin functionality and the most common plugins. You can also install themes to change the look and feel of the windows. There are other features that you may want to use so I’ve provided some [further reading](https://scotch.io/bar-talk/best-of-sublime-text-3-features-plugins-and-settings).