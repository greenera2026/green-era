import xml.etree.ElementTree as ET

svg_path = r"d:\VisionTechX\Projects\green-era\public\green-era-logo.svg"

try:
    tree = ET.parse(svg_path)
    root = tree.getroot()
    print("Root tag:", root.tag)
    print("Root attributes:", root.attrib)
    
    # Function to recursively inspect tags
    def inspect_element(elem, depth=0):
        indent = "  " * depth
        # Print tag and important attributes like id, fill, etc.
        attrs = {k: v for k, v in elem.attrib.items() if k in ('id', 'fill', 'stroke', 'width', 'height', 'style') or k.endswith('href')}
        # If it's a huge base64, truncate it
        for k in list(attrs.keys()):
            if len(attrs[k]) > 100:
                attrs[k] = attrs[k][:50] + "..." + attrs[k][-50:]
        print(f"{indent}<{elem.tag.split('}')[-1]} {attrs}>")
        for child in elem:
            inspect_element(child, depth + 1)
            
    inspect_element(root)
except Exception as e:
    print("Error:", e)
