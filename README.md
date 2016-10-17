# upchain-web3

## Standalone usage

```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.rawgit.com/Upchain/upchain-web3/master/dist/upchainweb3.js"></script>
</head>
<body>
<script>
    var web3 = new UpchainWeb3('https://eth.upchain.io/testnet','user','password')
    web3.eth.getBlock(0, function (err, block) {
        if (err) {
            return log.error(err)
        }
        alert(block.hash)
    })
</script>
</body>
</html>
```
