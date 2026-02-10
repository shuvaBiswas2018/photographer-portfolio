import boto3
import os

aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID")
aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY")
aws_bucket_name=os.getenv("AWS_S3_BUCKET_NAME")
region_name=os.getenv("AWS_REGION")

print("AWS_ACCESS_KEY_ID:", aws_access_key_id)
print("AWS_SECRET_ACCESS_KEY:", aws_secret_access_key)
print("AWS_S3_BUCKET_NAME:", aws_bucket_name)
print("AWS_REGION:", region_name)

s3 = boto3.client(
    "s3",
    aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
    aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"),
    region_name=os.getenv("AWS_REGION")
)

BUCKET_NAME = os.getenv("AWS_S3_BUCKET")


def create_s3_folder(folder_path: str):
    """
    S3 doesn't have real folders — this creates a folder marker.
    """
    s3.put_object(
        Bucket=BUCKET_NAME,
        Key=f"{folder_path}/"
    )
