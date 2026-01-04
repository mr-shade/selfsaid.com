---
title: "Android Protip: Show selected value of ListPreference"
date: "2016-10-18T12:02:00.000Z"
slug: "android-protip-show-selected-value-of-listpreference"
image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
description: "Here's a quick Protip for people who are still writing complex onPreferenceChanged code to show the selected value of a ListPreference  Just add android:summary=&quot;%s&quot; and Android will automatically do it for you ;)  For example, your code might look like : -      &lt;ListPreference         android:summary=&quot;%s&"
tags: []
original_url: "https://blog.codingblocks.com/2016/android-protip-show-selected-value-of-listpreference/"
---

Here's a quick Protip for people who are still writing complex `onPreferenceChanged` code to show the selected value of a _ListPreference_

Just add `android:summary="%s"` and Android will automatically do it for you ;)

For example, your code might look like : -

```xml
    <ListPreference
        android:summary="%s"
        android:defaultValue="km"
        android:entries="@array/distance_unit_names"
        android:entryValues="@array/distance_unit_values"
        android:key="distance_unit"
        android:title="Distance Unit"/>

```

Android will even put the currently selected value when you enter the preference screen.