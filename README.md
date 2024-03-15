# poc-cdxgen-lib

Run `npm start` to generate a SBOM for node-lastest image

Getting node image used for testing:
```
docker pull node:latest
cd poc-cdxgen-lib
docker save -o node-latest.tar node
```