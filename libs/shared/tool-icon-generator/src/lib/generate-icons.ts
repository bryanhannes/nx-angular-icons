import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

const svgSourceFolderName = 'icons-source';
const svgSourceFolderPath = path.join(__dirname, svgSourceFolderName);

const targetFolderName = 'generated';
const targetBasePath = 'libs/shared/ui-icons/src/lib';
const targetFolderPath = path.join(targetBasePath, targetFolderName);
const barrelFilePath = path.join(targetBasePath, targetFolderName, 'index.ts');

/* Arguments */
const args = process.argv.slice(2);
const generateAllIcons = args.find((arg) => arg.includes('--all'))?.split('=')[1] === 'true' ;

/* Util functions */
function deleteFolderIfExists(folder: string) {
  if (fs.existsSync(folder)) {
    fs.rmSync(folder, { recursive: true, force: true });
  }
}

function createFolderIfItDoesNotExists(folder: string): void {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
}

function kebabToPascal(kebabCaseString: string): string {
  return  kebabCaseString.split(/[-_]/).map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
}

function generateComponent(selector: string, componentName: string, svgPath: string): void {
  const command = `nx generate @nx-angular-icons/nx-plugin:icon-generator --componentName="${componentName}" --selector="${selector}"  --iconPath="${svgPath}" --quiet`;

  execSync(command, { stdio: 'inherit' });
}

function generateBarrelFile(icons: Map<string, string>): void {
  const exportStatements = Array.from(icons).map(([selector]) => `export * from './${selector}.component';`);

  fs.writeFileSync(barrelFilePath, `${exportStatements.join('\n')}`);
}

/* Main script */
if (generateAllIcons) {
  console.log(`✅ Deleting the output folder`);
  deleteFolderIfExists(targetFolderPath);
}

createFolderIfItDoesNotExists(targetFolderPath);

const sourceSvgFiles = fs.readdirSync(svgSourceFolderPath);
const icons = new Map<string, string>();

console.log(`✅ Start generating icon components`);

sourceSvgFiles.forEach((svgFile) => {
  const selector = svgFile.replace('.svg', '').toLowerCase();
  const fileExists = fs.existsSync(path.join(targetFolderPath, `${selector}.component.ts`));

  if (generateAllIcons || !fileExists) {
    const componentName = `${kebabToPascal(svgFile.replace('.svg', ''))}Icon`;
    const svgFilePath = path.join(__dirname, svgSourceFolderName, svgFile);

    generateComponent(selector, componentName, svgFilePath);

    console.log(`✅ Generated ${selector}`);
  } else {
    console.log(`✅ Did not regenerate ${selector}`);
  }

  const componentNameMatch = fs
    .readFileSync(path.join(targetFolderPath, `${selector}.component.ts`), 'utf8')
    .match(/export class (.*)/);

  if (componentNameMatch && componentNameMatch[1]) {
    icons.set(selector, componentNameMatch[1]);
  }
});

console.log(`✅ Done generating icon components`);

console.log(`✅ Generate barrel file (index.ts)`);

generateBarrelFile(icons);

console.log(`🏁 Icon components generated under:`, `${targetFolderPath}/${targetFolderName}`);
