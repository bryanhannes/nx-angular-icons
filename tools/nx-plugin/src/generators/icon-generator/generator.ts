import * as path from 'path';
import { execSync } from 'child_process';
import { formatFiles, generateFiles, Tree } from '@nx/devkit';
import { IconComponentGeneratorSchema } from './schema';

function optimizeSvg(svgFilePath: string): string {
  const svgoConfigPath = path.join(__dirname, 'svgo.config.js');

  return execSync(`svgo --config="${svgoConfigPath}" --pretty --input=${svgFilePath} --output=-`, {
    encoding: 'utf8',
  });
}

export async function iconComponentGenerator(tree: Tree, options: IconComponentGeneratorSchema): Promise<void> {
  const projectRoot = `libs/shared/ui-icons/src/lib/generated`;

  const { iconPath, ...params } = options;
  const optimizedSvgContent = optimizeSvg(iconPath);

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...params,
    svgCode: `${optimizedSvgContent}`,
  });

  await formatFiles(tree);
}

export default iconComponentGenerator;
