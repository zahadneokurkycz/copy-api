# copy api

### Iframed button
1) Make a classic iframe:

```
<iframe src="file.html">
Sorry! Your browser does not support iframe tag!
</iframe>
```

2) Make the right url adress:
- we start with 
```
https://zahadneokurkycz.github.io/copy-api/
```

- Add `?theme=` to the url and choose one from options (`light` or `dark`)

- Add `&text=` and text that you want to be copied to the url

- And finnaly add `&outline=` and choose one from options: `true` (if
you want button to be in outline style) or `false` if you want classic style.

- The final address should look like this:
```
https://zahadneokurkycz.github.io/copy-api/?theme=dark&text=Text-to-copy&outline=true
```

4) Replace `file.html` in the `src` attribute with your url adress

5) The final code should look like this:
```
<iframe src="https://zahadneokurkycz.github.io/copy-api/?theme=dark&text=Text-to-copy&outline=true">
Sorry! Your browser does not support iframe tag!
</iframe>
```
