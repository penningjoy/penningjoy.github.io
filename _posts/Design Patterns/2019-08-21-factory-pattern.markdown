---
layout: post
title:  "Object Oriented Programming- Creational Design Pattern: Factory Pattern "
date:   2019-08-21 11:30:36 -0400
Author: "Joydeep Banerjee"
categories: Design Patterns
permalink: /:categories/:title
---
Factory Design Pattern is one of the widely used and highly efficient design patterns in the realm of Object Oriented Programming. 
It is a creational design pattern used efficiently to create objects. Factory pattern helps in creating objects without exposing the creation logic. 

The below code is a very simple example of how to use factory pattern in Java.

{% highlight Java %}

/* Factory Design Pattter */
import java.lang.*;
interface flavour{
    public String getTaste();
}

class chocolate implements flavour {
    @Override
    public String getTaste(){
        return "Sweet";
    }
}

class curry implements flavour {
   @Override
   public String getTaste(){
       return "Spicy";
   }
}

class foodFactory {
    private String taste;
    public foodFactory(String taste) {
            this.taste = taste;
    }

    public String tasteTeller(){
        if(this.taste =="chocolate"){
            chocolate choco = new chocolate();
            return choco.getTaste();
        }
        if(this.taste == "curry") {
            curry curry = new curry();
            return curry.getTaste();
        }
        return "Sorry, not found!!";
    }
}

public class factoryPattern {
    public static void main(String[] args){
        String food = "chocolate";
        foodFactory factory = new foodFactory(food);
        System.out.println(" The taste of " + food + " is " + factory.tasteTeller() + ".");
    }
}

#=> prints 'The taste of chocolate is sweet.' to STDOUT.
{% endhighlight %}
