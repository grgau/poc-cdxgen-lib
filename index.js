import * as fs from "fs";
import { createBom } from "@cyclonedx/cdxgen";

export const generateSBOM = async (image_tar_file) => {
    createBom(image_tar_file, {"specVersion": "1.4"}).then((sbom) => {
        fs.writeFile("sbom.json", JSON.stringify(sbom.bomJson, null, 2), (error) => {
            if (error)
                console.log(`FS ERROR ${error}`);
        });
    }).catch((error) => {
        console.log(`CREATEBOM ERROR ${error}`);
    });
};

generateSBOM("node-latest.tar")