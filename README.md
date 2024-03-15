# poc-cdxgen-lib

Run `npm start` to generate a SBOM for node-lastest image

Getting node image used for testing:
```
docker pull node:latest
docker save -o poc-cdxgen-lib/node-latest.tar node
```