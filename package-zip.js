import { execSync } from 'child_process';
import { existsSync, unlinkSync } from 'fs';
import path from 'path';

const zipPath = path.resolve('auratube-extension.zip');
if (existsSync(zipPath)) {
  unlinkSync(zipPath);
}

const commands = [
  'Add-Type -AssemblyName System.IO.Compression',
  'Add-Type -AssemblyName System.IO.Compression.FileSystem',
  `$zipStream = [System.IO.File]::Open('${zipPath.replace(/\\/g, '\\\\')}', [System.IO.FileMode]::CreateNew)`,
  '$archive = New-Object System.IO.Compression.ZipArchive($zipStream, [System.IO.Compression.ZipArchiveMode]::Create)',
  "$distPath = (Resolve-Path 'dist').Path",
  'Get-ChildItem -Path $distPath -Recurse -File | ForEach-Object { $relPath = $_.FullName.Substring($distPath.Length + 1).Replace(\'\\\', \'/\'); [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $_.FullName, $relPath) }',
  '$archive.Dispose()',
  '$zipStream.Dispose()'
];

const script = commands.join('; ');
execSync(`powershell -NoProfile -Command "${script}"`, { stdio: 'inherit' });
console.log('✅ Created auratube-extension.zip successfully!');
