# JSCipherGroupProject
Browser-based group project to implement the Caesar Cipher

Features: User Key (shift-value) setting, Case-preservation, pass-through of non-alpha characters

Known Issues: main.js:38 should really be ciphertext += val.charAt(i) rather than ciphertext += plaintext.charAt(i) to get correct pass-through behaviour for extended ASCII/unicode characters. The string 'plaintext' has already had toUpperCase() applied, leading to unintentional conversion of e.g. 'à' to 'À'. Oops! Congrats to Alfie or whoever marks this if they tested for this edge case or otherwise spotted the error! 
