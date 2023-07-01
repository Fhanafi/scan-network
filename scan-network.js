#!/usr/bin/env node

const { program } = require('commander');
const { exec } = require('child_process');

program
  .version('1.0.0')
  .description('Network Scan')
  .option('-i, --ip <ip>', 'IP address to scan')
  .parse(process.argv);

if (!program.ip) {
  console.error('Please provide an IP address to scan.');
  process.exit(1);
}

const ip = program.ip;

// Execute the nmap command
exec(`nmap ${ip}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`Command execution error: ${stderr}`);
    return;
  }

  console.log(stdout);
});
