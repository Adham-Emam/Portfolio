"""edit comments

Revision ID: 06a807e1120c
Revises: 0e02073d2ecc
Create Date: 2024-05-28 11:28:58.406225

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '06a807e1120c'
down_revision = '0e02073d2ecc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('comments', schema=None) as batch_op:
        batch_op.add_column(sa.Column('blog_id', sa.Integer(), nullable=True))
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.create_foreign_key(None, 'blog_post', ['blog_id'], ['id'])
        batch_op.drop_column('blog_post_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('comments', schema=None) as batch_op:
        batch_op.add_column(sa.Column('blog_post_id', sa.INTEGER(), nullable=True))
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.create_foreign_key(None, 'blog_post', ['blog_post_id'], ['id'])
        batch_op.drop_column('blog_id')

    # ### end Alembic commands ###
