/**
 * Given two strings a and b consisting of lowercase characters.
 *  The task is to check whether two given strings are an anagram of each other or not.
 *  An anagram of a string is another string that contains the same characters,
 *  only the order of characters can be different.
 *  For example, act and tac are an anagram of each other.

Note:-

    If the strings are anagrams you have to return True or else return False

    |s| represents the length of string s.

 */

function  isAnagram(a, b)
{
    let str1=a.toLowerCase();
    let str2=b.toLowerCase();
    
    let sortedA=str1.sort;
    let sortedB=str2.sort;
    if(sortedA==sortedB){
        return "YES"
    }else{
        return "NO"
    }
}