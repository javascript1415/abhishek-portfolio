import os

def read_code_files_in_folder(folder_path, extensions=None):
    """
    Walk through folder_path and collect all files with specified extensions (including subfolders)
    Returns a list of dictionaries with 'file_path' and 'content'.
    """
    if extensions is None:
        extensions = ['.js', '.ts', '.tsx', '.json', '.css', '.config.ts', '.config.js']

    files_data = []

    for root, dirs, files in os.walk(folder_path):
        # Skip node_modules and .next
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if '.next' in dirs:
            dirs.remove('.next')
        if '.git' in dirs:
            dirs.remove('.git')
        
        for file in files:
            if any(file.endswith(ext) for ext in extensions):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        files_data.append({
                            'file_path': file_path,
                            'content': content
                        })
                except Exception as e:
                    print(f"⚠️ Could not read file: {file_path} ({e})")
    
    return files_data


def main():
    # Your portfolio project path
    project_root = '/home/parrot/Documents/abhishek-portfolio'
    
    # Folders to scan in your portfolio
    folders_to_scan = [
        os.path.join(project_root, 'app'),
        os.path.join(project_root, 'data'),
        os.path.join(project_root, 'lib'),
        os.path.join(project_root, 'utils'),
    ]
    
    # Also include root config files
    root_files = [
        'tailwind.config.ts',
        'next.config.js',
        'tsconfig.json',
        'package.json',
        '.env.local',
    ]

    all_files = []

    # Scan folders
    for folder in folders_to_scan:
        if not os.path.exists(folder):
            print(f"⚠️ Folder does not exist: {folder}")
            continue
        print(f"📂 Scanning: {folder}")
        all_files.extend(read_code_files_in_folder(folder))

    # Add root config files
    for root_file in root_files:
        file_path = os.path.join(project_root, root_file)
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    all_files.append({
                        'file_path': file_path,
                        'content': content
                    })
                    print(f"✅ Added root file: {root_file}")
            except Exception as e:
                print(f"⚠️ Could not read file: {file_path} ({e})")

    # Save output in the app folder
    output_file = os.path.join(project_root, 'app', 'all_portfolio_files.txt')

    with open(output_file, 'w', encoding='utf-8') as out:
        out.write("=" * 80 + "\n")
        out.write("ABHISHEK ACHARYA - PORTFOLIO PROJECT FILES\n")
        out.write("=" * 80 + "\n\n")
        out.write(f"Total Files: {len(all_files)}\n")
        out.write(f"Generated: {os.popen('date').read()}\n")
        out.write("=" * 80 + "\n\n")
        
        for f in all_files:
            # Make path relative for readability
            rel_path = f['file_path'].replace(project_root, '')
            out.write(f"File: {rel_path}\n")
            out.write("=" * 80 + "\n")
            out.write(f['content'])
            out.write("\n" + "=" * 80 + "\n\n")

    print(f"\n✅ File extraction completed!")
    print(f"📄 Total files extracted: {len(all_files)}")
    print(f"💾 Saved to: {output_file}")


if __name__ == "__main__":
    main()
